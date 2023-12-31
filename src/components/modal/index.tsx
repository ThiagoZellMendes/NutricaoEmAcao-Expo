import React, { useState } from "react"
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"

export function ConfirmationModal({ isVisible, closeModal, title }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        closeModal()
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Feather name="check-circle" size={50} color="green" />
          <Text style={styles.successText}>{title}</Text>
          <TouchableOpacity style={styles.okButton} onPress={closeModal}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escurecido
  },
  modalContent: {
    width: 375,
    height: 207,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  okButton: {
    backgroundColor: "green",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  okButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})
