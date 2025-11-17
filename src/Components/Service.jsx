import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// All services data
export const services = [
  {
    id: "therapy",
    title: "Individual Therapy",
    short: "Personalized sessions for mental well-being.",
    image: "https://i.ibb.co/PzMFMWsy/Individual-Therapy-Adolescents.webp",
    details: {
      description:
        "Individual therapy focuses on personal growth, coping strategies, and overcoming anxiety, depression, or stress through tailored sessions.",
      who: "Adults, adolescents, and teenagers who face personal challenges, stress, anxiety, or depression.",
      methodology: [
        "One-on-one sessions with a licensed therapist.",
        "Goal setting and coping strategy development.",
        "Cognitive Behavioral Therapy (CBT) or other evidence-based approaches.",
        "Progress tracking and homework exercises between sessions."
      ],
      duration: "45-60 minute sessions, typically 6-12 sessions depending on needs.",
      benefits: [
        "Improves self-awareness and emotional regulation.",
        "Reduces anxiety, depression, and stress symptoms.",
        "Helps set and achieve personal goals.",
        "Develops effective coping strategies."
      ],
      notes: "Sessions are confidential. Frequency can be weekly or bi-weekly."
    }
  },
  {
    id: "counseling",
    title: "Couples Counseling",
    short: "Improve communication and relationships.",
    image: "https://i.ibb.co.com/PsSqxsh2/Marriage-Counseling.jpg",
    details: {
      description:
        "Couples counseling helps partners improve communication, rebuild trust, and strengthen their relationship through guided sessions.",
      who: "Couples experiencing communication issues, conflicts, or relationship stress.",
      methodology: [
        "Joint sessions with both partners and a therapist.",
        "Identifying patterns and triggers in the relationship.",
        "Communication skill training.",
        "Conflict resolution and emotional support techniques."
      ],
      duration: "50-60 minute sessions, usually 6-10 sessions depending on progress.",
      benefits: [
        "Enhances communication and understanding.",
        "Builds trust and emotional intimacy.",
        "Provides tools for resolving conflicts effectively.",
        "Strengthens long-term relationship satisfaction."
      ],
      notes: "Both partners must be committed to attend sessions regularly."
    }
  },
  {
    id: "group",
    title: "Group Therapy",
    short: "Supportive group sessions with peers.",
    image: "https://i.ibb.co/bjrFMRTy/5-Benefits-of-Group-Therapy-During-Addiction-Recovery.jpg",
    details: {
      description:
        "Group therapy provides a safe environment to share experiences, receive support, and learn coping strategies from peers facing similar challenges.",
      who: "Individuals seeking peer support, social skill development, or recovery guidance.",
      methodology: [
        "Small group sessions led by a therapist.",
        "Sharing experiences and discussing challenges.",
        "Group exercises to improve coping and social skills.",
        "Feedback and mutual support from participants."
      ],
      duration: "60-90 minute sessions, usually weekly for 8-12 weeks.",
      benefits: [
        "Provides a sense of belonging and support.",
        "Improves interpersonal and social skills.",
        "Encourages self-reflection and accountability.",
        "Offers diverse perspectives on common problems."
      ],
      notes: "Attendance and participation are encouraged for maximum benefit."
    }
  },
  {
    id: "online",
    title: "Online Consultation",
    short: "Therapy from the comfort of your home.",
    image: "https://i.ibb.co/jZyf4Rbh/Key-Visual-1000-x-600-Site.png",
    details: {
      description:
        "Online consultation allows clients to receive therapy via video calls, making mental health support accessible anytime, anywhere.",
      who: "Individuals or couples unable to attend in-person sessions or preferring remote therapy.",
      methodology: [
        "Secure video conferencing sessions.",
        "Same techniques as in-person therapy (CBT, counseling, coaching).",
        "Flexible scheduling and follow-up sessions.",
        "Homework and digital resources shared online."
      ],
      duration: "45-60 minute sessions, frequency depends on individual needs.",
      benefits: [
        "Convenient and flexible scheduling.",
        "Access therapy from anywhere.",
        "Confidential and private environment.",
        "Maintains progress with digital support materials."
      ],
      notes: "Requires a stable internet connection and private space."
    }
  },
  {
    id: "play-therapy",
    title: "Play Therapy",
    short: "Helping children express emotions through play.",
    image: "https://i.ibb.co.com/8gN7dMZ4/download.jpg",
    details: {
      description:
        "Play therapy uses structured play to help children communicate feelings, overcome trauma, and develop social and emotional skills.",
      who: "Children aged 3-12 with emotional, behavioral, or developmental challenges.",
      methodology: [
        "Guided play using toys, art, and role-play.",
        "Observation and interpretation by trained therapists.",
        "Integration of parental feedback and involvement.",
        "Development of coping strategies through play."
      ],
      duration: "30-50 minute sessions, usually 8-20 sessions.",
      benefits: [
        "Encourages emotional expression and communication.",
        "Helps children process trauma safely.",
        "Strengthens social and coping skills.",
        "Builds confidence and problem-solving abilities."
      ],
      notes: "Parental involvement may be included in some sessions."
    }
  },
  {
    id: "behavioral-therapy",
    title: "Behavioral Therapy",
    short: "Improving behavior and coping skills in children.",
    image: "https://i.ibb.co.com/pjB4bzRX/Behavioral-Therapy-Techniques-1024x647.webp",
    details: {
      description:
        "Behavioral therapy focuses on identifying and changing negative behaviors while reinforcing positive behaviors in children.",
      who: "Children and adolescents with ADHD, anxiety, or behavioral challenges.",
      methodology: [
        "Behavior tracking and assessment.",
        "Positive reinforcement for desired behaviors.",
        "Skill-building exercises to manage emotions.",
        "Parental guidance and reinforcement at home."
      ],
      duration: "30-45 minute sessions, typically 10-15 sessions.",
      benefits: [
        "Reduces negative behaviors and emotional outbursts.",
        "Improves coping and social skills.",
        "Supports academic and home life success.",
        "Promotes long-term positive habits."
      ],
      notes: "Collaboration with parents and teachers improves effectiveness."
    }
  },
  {
    id: "child-counseling",
    title: "Child Counseling",
    short: "One-on-one sessions tailored for children.",
    image: "https://i.ibb.co.com/jPpTXtjw/childcounselling.jpg",
    details: {
      description:
        "Child counseling addresses emotional, social, and developmental concerns, guiding children through challenges at home, school, or with peers.",
      who: "Children experiencing emotional distress, school challenges, or social difficulties.",
      methodology: [
        "Individual sessions tailored to the child's needs.",
        "Therapeutic activities including discussion, play, and art.",
        "Goal setting for emotional and social growth.",
        "Collaboration with parents and educators as needed."
      ],
      duration: "30-50 minute sessions, typically 8-12 sessions.",
      benefits: [
        "Improves emotional regulation and self-confidence.",
        "Strengthens coping strategies and problem-solving skills.",
        "Supports healthy social interactions.",
        "Guides children through academic and family challenges."
      ],
      notes: "Sessions are supportive and child-friendly, confidential and safe."
    }
  }
];


const Service = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <section id="services" className="py-20 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-black">
          {services.map((service) => (
            <Link key={service.id} to={`/service/${service.id}`}>
                  <div className="card card-side bg-base-100 shadow-lg hover:shadow-2xl transition cursor-pointer w-96 h-64">
                <figure className="w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full rounded-l-xl"
                  />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.short} <span className="text-blue-600"> More....</span></p>
                   
                </div>
              </div></Link>
        

          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
