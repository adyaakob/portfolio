'use client'

import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { getBasePath } from '@/lib/utils'

const basePath = getBasePath()

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerContent: {
    flex: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginLeft: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1a1a1a',
  },
  subheading: {
    fontSize: 18,
    marginBottom: 8,
    color: '#4a5568',
    marginTop: 15,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
    color: '#2d3748',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
    lineHeight: 1.4,
    color: '#4a5568',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  contactText: {
    fontSize: 10,
    color: '#718096',
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#2d3748',
    borderBottom: 1,
    paddingBottom: 5,
  },
  experienceItem: {
    marginBottom: 15,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 10,
  },
  skillCategory: {
    width: '45%',
    marginBottom: 15,
  },
  skillList: {
    marginTop: 5,
  },
  skillItem: {
    fontSize: 10,
    marginBottom: 4,
    color: '#4A5568',
  },
  bulletPoint: {
    fontSize: 11,
    marginBottom: 3,
    lineHeight: 1.4,
    color: '#4a5568',
    paddingLeft: 10,
  },
  methodologyImage: {
    width: '100%',
    height: 200,
    marginVertical: 15,
    objectFit: 'contain',
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 10,
  },
  toolCategory: {
    width: '100%',
    marginBottom: 20,
  },
  toolsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 5,
  },
  toolItem: {
    width: 60,
    alignItems: 'center',
    marginBottom: 10,
  },
  toolIcon: {
    width: 40,
    height: 40,
  },
  toolName: {
    fontSize: 8,
    textAlign: 'center',
    marginTop: 4,
    color: '#4A5568',
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 10,
  },
  projectCard: {
    width: '45%',
    backgroundColor: '#F7FAFC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  projectImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
    objectFit: 'cover',
    borderRadius: 4,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    right: 30,
    color: '#718096',
  }
})

// Create Document Component
const PDFDocument = () => {
  return (
    <Document>
      {/* Page 1: Profile, About, Experience */}
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.heading}>Ahmad Dahalan Yaakob</Text>
            <Text style={styles.text}>
              Experienced R&D and Product Management Professional in Defense Communications
            </Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactText}>51 years old</Text>
              <Text style={styles.contactText}>+60 102369037</Text>
              <Text style={styles.contactText}>adyaakob@gmail.com</Text>
            </View>
          </View>
          <Image 
            src={`${basePath}/images/profile.jpg`}
            style={styles.profileImage}
          />
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.text}>
            With more than two decades of experience as an engineering leader, I have managed diverse teams 
            of over 30 engineers across various disciplines. My expertise spans electrical systems, RF technology, 
            software development, and mechanical engineering. Additionally, my interest in Artificial Intelligence (AI) 
            allows me to apply my past knowledge to explore new opportunities, leveraging innovation not only in 
            defense communications but also in other industries.
          </Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          
          <View style={styles.experienceItem}>
            <Text style={styles.title}>R&D General Manager</Text>
            <Text style={styles.text}>Sapura Thales Electronics Sdn Bhd • 2020 - Jun 2024 · 4 yrs</Text>
            <Text style={styles.bulletPoint}>• Post-MCO - Ensuring smooth ramp-up of RND activities</Text>
            <Text style={styles.bulletPoint}>• Adapting to the new normal and driving business automation</Text>
            <Text style={styles.bulletPoint}>• Managing supply chain affected by the pandemic</Text>
            <Text style={styles.bulletPoint}>• Maintaining zero '0' NCR for ISO audit</Text>
          </View>

          <View style={styles.experienceItem}>
            <Text style={styles.title}>R&D Head Of Department</Text>
            <Text style={styles.text}>Sapura Thales Electronics Sdn Bhd • 2014 - 2019 · 5 yrs</Text>
            <Text style={styles.bulletPoint}>• Completed TRC5200 development, 1st tactical radio by local engineers</Text>
            <Text style={styles.bulletPoint}>• Managing schedule, budget and risks for projects</Text>
            <Text style={styles.bulletPoint}>• Defining product development roadmap for 10 years</Text>
            <Text style={styles.bulletPoint}>• Exploring international business opportunities</Text>
          </View>
        </View>

        <Text style={styles.pageNumber}>1</Text>
      </Page>

      {/* Page 2: Skills and Methodology */}
      <Page size="A4" style={styles.page}>
        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Skills</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillCategory}>
              <Text style={styles.title}>Technical Leadership</Text>
              <View style={styles.skillList}>
                <Text style={styles.skillItem}>• Research & Development Program Management</Text>
                <Text style={styles.skillItem}>• Systems Engineering & Platform Integration</Text>
                <Text style={styles.skillItem}>• Military Standard Compliance</Text>
                <Text style={styles.skillItem}>• Product Development Lifecycle</Text>
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.title}>Project Management</Text>
              <View style={styles.skillList}>
                <Text style={styles.skillItem}>• Strategic Project Planning</Text>
                <Text style={styles.skillItem}>• Budget Planning</Text>
                <Text style={styles.skillItem}>• Risk Assessment</Text>
                <Text style={styles.skillItem}>• ISO 9001:2015</Text>
              </View>
            </View>

            <View style={styles.skillCategory}>
              <Text style={styles.title}>Technical Expertise</Text>
              <View style={styles.skillList}>
                <Text style={styles.skillItem}>• Radio Communication Systems</Text>
                <Text style={styles.skillItem}>• Tactical Network Architecture</Text>
                <Text style={styles.skillItem}>• Military Platform Integration</Text>
                <Text style={styles.skillItem}>• System Performance Analysis</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Methodology Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Design & Development Methodology</Text>
          <Text style={styles.text}>
            In my design and development processes, I employ the Vee Model Systems Engineering methodology, 
            a structured framework that emphasizes thorough planning, integration, and validation throughout 
            a project&apos;s lifecycle.
          </Text>
          <Image
            src={`${basePath}/images/methodology/v-model.jpg`}
            style={styles.methodologyImage}
          />
        </View>

        <Text style={styles.pageNumber}>2</Text>
      </Page>

      {/* Page 3: Tools & Technologies */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tools & Technologies</Text>
          
          <View style={styles.toolCategory}>
            <Text style={styles.title}>Productivity Suites</Text>
            <View style={styles.toolsRow}>
              {[
                { name: "Office 365", logo: "/images/tools/office365.png" },
                { name: "Canva", logo: "/images/tools/canva.png" },
                { name: "Gamma", logo: "/images/tools/gamma.png" },
              ].map((tool) => (
                <View key={tool.name} style={styles.toolItem}>
                  <Image
                    src={`${basePath}${tool.logo}`}
                    style={styles.toolIcon}
                  />
                  <Text style={styles.toolName}>{tool.name}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.toolCategory}>
            <Text style={styles.title}>Development Tools</Text>
            <View style={styles.toolsRow}>
              {[
                { name: "VS Code", logo: "/images/tools/vscode.png" },
                { name: "GitHub", logo: "/images/tools/github.png" },
                { name: "Windsurf", logo: "/images/tools/windsurf.png" },
              ].map((tool) => (
                <View key={tool.name} style={styles.toolItem}>
                  <Image
                    src={`${basePath}${tool.logo}`}
                    style={styles.toolIcon}
                  />
                  <Text style={styles.toolName}>{tool.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Projects in Motion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects in Motion</Text>
          <View style={styles.projectsGrid}>
            {[
              {
                name: "AI-Integrated Project Management Dashboard",
                description: "Developing a prototype web-based dashboard that integrates various AI tools and LLM models.",
                image: "/images/projects-in-motion/ai-dashboard.jpg"
              },
              {
                name: "Mistral Canvas Dashboard Evaluation",
                description: "Evaluating Mistral's Canvas capabilities in code visualization and document editing.",
                image: "/images/projects-in-motion/mistral-canvas.jpg"
              },
            ].map((project) => (
              <View key={project.name} style={styles.projectCard}>
                <Image
                  src={`${basePath}${project.image}`}
                  style={styles.projectImage}
                />
                <Text style={styles.title}>{project.name}</Text>
                <Text style={styles.text}>{project.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.pageNumber}>3</Text>
      </Page>
    </Document>
  )
}

export default PDFDocument
