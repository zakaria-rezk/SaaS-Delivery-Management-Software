interface Service {
  id: number;
  number: string;
  header: string;
  content: string;
}
interface Feature {
  id: number;
  number: string;
  header: string;
  content: string;
  component: string;
}
export const services: Service[] = [
  {
    id: 1,
    number: "01",
    header: "Connect",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione",
  },
  {
    id: 2,
    number: "02",
    header: "Collect",
    content:
      "who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultan",
  },
  {
    id: 3,
    number: "03",
    header: "Convert",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime",
  },
];
export const features: Feature[] = [
  {
    id: 1,
    number: "01",
    header: "Fully Secured",
    component: "FullySecured",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione",
  },
  {
    id: 2,
    number: "02",
    header: "Management",
    component: "Management",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
  },
  {
    id: 3,
    number: "03",
    header: "Strong Data",
    component: "StrongData",
    content:
      "Ut enim ad minima veniam, quis nostrum rcitationem ullam corporis",
  },
  {
    id: 4,
    number: "04",
    header: "Analysis",
    component: "Analysis",
    content:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
  },
];
interface Fag {
  question: string;
  answer: string;
  isOpen: boolean;
}
export const Fags: Fag[] = [
  {
    isOpen: false,
    question: "Website reponse taking time, how to improve?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "App installation failed, how to update system information?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "App installation failed, how to update system information?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
  {
    isOpen: false,
    question: "New update fixed all bug and issues?",
    answer:
      "Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.",
  },
];
