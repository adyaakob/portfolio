'use client'

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    lineHeight: 1.4,
  }
})

// Create Document Component
const PDFDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Ahmad Dahalan Yaakob</Text>
          <Text style={styles.text}>
            Experienced R&D and Product Management Professional in Defense Communications
          </Text>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.text}>
            I bring over 25 years of experience in defense, telecommunications, and emerging technologies, 
            with a strong interest in Artificial Intelligence (AI) as a key driver for my career development.
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.text}>51 years old</Text>
          <Text style={styles.text}>+60 102369037</Text>
          <Text style={styles.text}>adyaakob@gmail.com</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PDFDocument
