import { Gauge, BookOpen, Video } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { aslDetectionIcon } from '../../assets/project_icons';
import { socialLinks } from '../../config/socialLinks';

const RealtimeAslDetection = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={aslDetectionIcon}
        title="Real-Time ASL Detection"
        subtitle="A webcam-based American Sign Language recognizer"
        githubUrl={socialLinks.repositories.projectThree}
        features={[
          { icon: Gauge, title: 'Accuracy', description: '94.5%' },
          { icon: BookOpen, title: 'Vocabulary', description: '28 words' },
          { icon: Video, title: 'Pipeline', description: 'Webcam → MediaPipe → sklearn' },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "This project builds a real-time American Sign Language recognizer that takes webcam input, extracts hand landmarks with MediaPipe, and classifies signs with a scikit-learn model. Two earlier approaches a WLASL Transformer and MediaPipe Model Maker didn't pan out, the second blocked entirely by a broken dependency.",
            "When the vocabulary scaled up, live accuracy collapsed. Rather than guessing, I tested hypotheses one at a time ruling out mirroring issues and feature-scale bugs before tracing the real cause to insufficient variety in the training clips.",
            "The fix was a custom 'collect mode' that records training data through the exact same live pipeline used for recognition, closing the gap between training and inference conditions. This brought cross-validated accuracy to 94.5% across all 28 words."
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={["Python", "OpenCV", "MediaPipe", "scikit-learn", "Claude API"]} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            "Built a real-time recognition pipeline: webcam → MediaPipe landmarks → sklearn classifier.",
            "Systematically debugged a live-accuracy collapse via hypothesis elimination.",
            "Root-caused the issue to training-clip variety, not mirroring or feature scaling.",
            "Built a 'collect mode' that records training data through the live inference pipeline.",
            "Reached 94.5% cross-validated accuracy across 28 words.",
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default RealtimeAslDetection;
