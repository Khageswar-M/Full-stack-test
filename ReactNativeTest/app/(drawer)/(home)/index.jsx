import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home index</Text>
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        activeOpacity={0.5}
        style={{
          backgroundColor: '#26f055',           // your green accent
          paddingVertical: 14,
          paddingHorizontal: 32,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#26f055',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.35,
          shadowRadius: 8,
          elevation: 6,
          borderWidth: 2,
          borderColor: 'hsla(134, 100%, 37%, 0.55)'

        }}
      >
        <Text
          style={{
            color: '#000',                      // or '#fff' if you prefer contrast
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 0.3,
          }}
        >Open Bottom Sheet</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"   // 👈 fade looks better for center popup
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => setIsOpen(false)}
        >
          {/* Centered popup */}
          <View style={styles.centerWrapper}>
            <Pressable style={styles.popup} onPress={() => { }}>
              <Text style={styles.title}>Popup Modal</Text>

              <Text style={styles.subtitle}>
                This is now centered on the screen
              </Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setIsOpen(false)}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </Pressable>
      </Modal>

    </View>
  )
}

export default index;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerWrapper: {
    width: '100%',
    paddingHorizontal: 24,
  },

  popup: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 10,          // Android shadow
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },

  closeButton: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  closeText: {
    fontWeight: '600',
  },
})

