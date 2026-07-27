import React from 'react';
import Icon from '../components/common/Icon';

const Support = () => {
  const styles = {
    container: {
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    subtitle: {
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '24px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s, boxShadow 0.3s'
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: '#eef2ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px'
    },
    cardText: {
      color: '#6b7280',
      lineHeight: '1.6',
      fontSize: '14px',
      marginBottom: '12px'
    },
    contactInfo: {
      color: '#2563eb',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none'
    },
    section: {
      marginBottom: '32px'
    },
    sectionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '16px'
    },
    faqItem: {
      background: 'white',
      padding: '16px 20px',
      borderRadius: '8px',
      borderBottom: '1px solid #e5e7eb',
      cursor: 'pointer',
      transition: 'background 0.2s'
    },
    faqItemHover: {
      background: '#f9fafb'
    },
    faqQuestion: {
      fontWeight: '500',
      color: '#1f2937',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    faqAnswer: {
      color: '#6b7280',
      fontSize: '14px',
      marginTop: '8px',
      paddingTop: '8px',
      borderTop: '1px solid #e5e7eb'
    },
    launchBox: {
      background: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
      border: '2px solid #2563eb',
      borderRadius: '12px',
      padding: '20px 24px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    launchButton: {
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  const contacts = [
    { 
      icon: 'Laptop', 
      title: 'IT Support', 
      desc: 'Technical support for all platforms and systems',
      contact: 'itsupport@ccyiglobalacademy.com',
      phone: '+234 701 832 7021'
    },
    { 
      icon: 'Library', 
      title: 'Learning Resources', 
      desc: 'Research and academic resource support',
      contact: 'library@ccyiglobalacademy.com',
      phone: '+234 701 832 7022'
    },
    { 
      icon: 'Users', 
      title: 'HR Support', 
      desc: 'Staff welfare and administrative guidance',
      contact: 'hr@ccyiglobalacademy.com',
      phone: '+234 701 832 7023'
    },
    { 
      icon: 'BookOpen', 
      title: 'Academic Affairs', 
      desc: 'Academic policies and faculty development',
      contact: 'academicaffairs@ccyiglobalacademy.com',
      phone: '+234 701 832 7024'
    }
  ];

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click "Forgot Password". You will receive an email with instructions to reset your password.'
    },
    {
      question: 'How do I get technical support?',
      answer: 'Contact our IT Support team via email at itsupport@ccyiglobalacademy.com or call +234 701 832 7021 during business hours.'
    },
    {
      question: 'What platforms are available for faculty?',
      answer: 'We provide access to Moodle LMS, Turnitin, Office 365, Grammarly, and the CCYI Global Academy Portal.'
    },
    {
      question: 'How do I request training materials?',
      answer: 'Submit a request through the Resources section or contact the Learning Resources team at library@ccyiglobalacademy.com.'
    }
  ];

  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <Icon name="HelpCircle" size={32} color="#2563eb" />
        Support
      </h1>
      <p style={styles.subtitle}>Get help with any platform or service</p>

      {/* Launch Button */}
      <div style={styles.launchBox}>
        <div>
          <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>
            <Icon name="Rocket" size={16} style={{ marginRight: '8px' }} />
            Need Immediate Help?
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
            Access our live support portal
          </p>
        </div>
        <a
          href="https://ccyiglobalentwebng.com.ng/lms"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.launchButton}
          onMouseEnter={(e) => {
            e.target.style.background = '#1d4ed8';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <Icon name="ExternalLink" size={16} />
          Launch Support Portal →
        </a>
      </div>

      {/* Contact Cards */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📞 Contact Information</h2>
        <div style={styles.grid}>
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
            >
              <div style={styles.iconContainer}>
                <Icon name={contact.icon} size={24} color="#4f46e5" />
              </div>
              <h3 style={styles.cardTitle}>{contact.title}</h3>
              <p style={styles.cardText}>{contact.desc}</p>
              <a href={`mailto:${contact.contact}`} style={styles.contactInfo}>
                <Icon name="Mail" size={14} style={{ marginRight: '6px' }} />
                {contact.contact}
              </a>
              <br />
              <span style={{ color: '#6b7280', fontSize: '13px' }}>
                <Icon name="Phone" size={14} style={{ marginRight: '6px' }} />
                {contact.phone}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>❓ Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            style={styles.faqItem}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
          >
            <div style={styles.faqQuestion}>
              <span>{faq.question}</span>
              <Icon 
                name={openFaq === index ? 'ChevronUp' : 'ChevronDown'} 
                size={18} 
                color="#6b7280" 
              />
            </div>
            {openFaq === index && (
              <div style={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;