import { Document, Page, Text, View, Link, StyleSheet, Font } from '@react-pdf/renderer';
import { ABOUT } from '@/data/about.data';
import { EXPERIENCE } from '@/data/experience.data';
import { EDUCATION } from '@/data/education.data';
import { SKILLS } from '@/data/skills.data';

Font.register({
  family: 'Lato',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/lato/v25/S6uyw4BMUTPHvxk.ttf' },                        // Regular 400
    { src: 'https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh7USew8.ttf', fontWeight: 300 },   // Light
    { src: 'https://fonts.gstatic.com/s/lato/v25/S6u9w4BMUTPHh6UVew8.ttf', fontWeight: 700 },   // Bold
  ],
})

const ACCENT = '#4a7fd4'
const TEXT = '#1c1c22'
const MUTED = '#666666'
const BORDER = '#e0e0e0'
const CHIP_BG = '#f4f4f5'

const s = StyleSheet.create({
  page: { fontFamily: 'Lato', fontSize: 10, color: TEXT, paddingVertical: 40, paddingHorizontal: 48, lineHeight: 1.5 },
  // Header
  header: { marginBottom: 18, borderBottomWidth: 2, borderBottomColor: ACCENT, paddingBottom: 14 },
  name: { fontSize: 24, fontFamily: 'Lato', fontWeight: 700, marginBottom: 16 },
  headline: { fontSize: 12, color: ACCENT, marginBottom: 10 },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', columnGap: 16, rowGap: 3 },
  contactText: { fontSize: 9, color: MUTED },
  contactLink: { fontSize: 9, color: ACCENT, textDecoration: 'none' },
  // Section
  section: { marginBottom: 14 },
  sectionTitle: { fontSize: 11, fontFamily: 'Lato', fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: 1, borderBottomWidth: 1, borderBottomColor: BORDER, paddingBottom: 4, marginBottom: 8 },
  // About
  bodyText: { fontSize: 10, color: MUTED, lineHeight: 1.6 },
  // Experience
  jobWrap: { marginBottom: 10 },
  jobRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  jobTitle: { fontSize: 11, fontFamily: 'Lato', fontWeight: 700 },
  jobMeta: { fontSize: 9, color: MUTED, marginBottom: 5 },
  bullet: { flexDirection: 'row', marginBottom: 2 },
  bulletMark: { fontSize: 9, color: ACCENT, marginRight: 5 },
  bulletText: { fontSize: 9, color: MUTED, flex: 1, lineHeight: 1.5 },
  // Education
  eduWrap: { marginBottom: 8 },
  eduRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  eduDegree: { fontSize: 10, fontFamily: 'Lato', fontWeight: 700 },
  eduInstitution: { fontSize: 9, color: ACCENT, marginBottom: 2 },
  eduSpec: { fontSize: 9, color: MUTED },
  // Skills & Languages
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  chip: { backgroundColor: CHIP_BG, borderWidth: 1, borderColor: BORDER, borderRadius: 4, paddingVertical: 3, paddingHorizontal: 7, fontSize: 9 },
  smallText: { fontSize: 9, color: MUTED },
});

const CvDocument = () => {
  return (
    <Document title="CV – Pavel Konyakhin" author="Pavel Konyakhin">
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <Text style={s.name}>Pavel Konyakhin</Text>
          <Text style={s.headline}>Full-stack Software Developer</Text>
          <View style={s.contactRow}>
            <Text style={s.contactText}>Yerevan, Armenia</Text>
            <Link src="tel:+37455434741" style={s.contactLink}>+374 55 434741</Link>
            <Link src="mailto:pavel.konyakhin@gmail.com" style={s.contactLink}>pavel.konyakhin@gmail.com</Link>
            <Link src="https://t.me/solidados" style={s.contactLink}>t.me/solidados</Link>
            <Link src="https://github.com/solidados" style={s.contactLink}>github.com/solidados</Link>
            <Link src="https://linkedin.com/in/solidados" style={s.contactLink}>linkedin.com/in/solidados</Link>
          </View>
        </View>
        
        {/* ABOUT */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>About</Text>
          <Text style={s.bodyText}>{ABOUT.description.en}</Text>
        </View>
        
        {/* EXPERIENCE */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Experience</Text>
          {EXPERIENCE.items.map((job) => (
            <View key={job.id} style={s.jobWrap}>
              <View style={s.jobRow}>
                <Text style={s.jobTitle}>{job.position.en}</Text>
                <Text style={s.smallText}>{job.duration}</Text>
              </View>
              <Text style={s.jobMeta}>{job.company}  ·  {job.location}</Text>
              {job.responsibilities?.map((item, i) => (
                <View key={i} style={s.bullet}>
                  <Text style={s.bulletMark}>›</Text>
                  <Text style={s.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        
        {/* EDUCATION */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Education</Text>
          {EDUCATION.items.map((edu) => (
            <View key={edu.id} style={s.eduWrap}>
              <View style={s.eduRow}>
                <Text style={s.eduDegree}>{edu.degree.en}</Text>
                <Text style={s.smallText}>{edu.duration}</Text>
              </View>
              <Text style={s.eduInstitution}>{edu.institution}</Text>
              {edu.specialization && (
                <Text style={s.eduSpec}>{edu.specialization.en}</Text>
              )}
            </View>
          ))}
        </View>
        
        {/* SKILLS */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Skills</Text>
          <View style={s.chipsRow}>
            {SKILLS.items.map((skill) => (
              <Text key={skill.id} style={s.chip}>{skill.name.en}</Text>
            ))}
          </View>
        </View>
        
        {/* LANGUAGES */}
        <View style={s.section}>
          <Text style={s.sectionTitle}>Languages</Text>
          <View style={s.chipsRow}>
            {['English (B2/C1)', 'Russian (Native)', 'Armenian (Beginner)'].map((lang) => (
              <Text key={lang} style={s.chip}>{lang}</Text>
            ))}
          </View>
        </View>
        
      </Page>
    </Document>
  );
};

export default CvDocument;
