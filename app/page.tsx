import Home from "@/components/home";

export default async function App() {
  const paths = {
    photos: [
      "/img/stark.png",
      "/img/greyjoy.png"
    ],
    avatar: "/img/avatar-linkedin.jpg",
    dog: "/img/greyjoy.png",
    action: "/img/projects/Weirder-People.png",
    webagent: "/img/projects/Studio.png",
    chatbot: "/img/projects/Public-chatroom.png",
    resume: "https://drive.google.com/file/d/1QAoAlj103PQ-Tu-AueurFWYLnIE0LfwU/preview",
    paper: "/img/projects/Palate.png"
  };

  return (
    <Home
      actionImageUrl={paths.action}
      avatarUrl={paths.avatar}
      chatbotUrl={paths.chatbot}
      paperUrl={paths.paper}
      photos={paths.photos}
      resumeUrl={paths.resume}
      webagentUrl={paths.webagent}
    />
  );
}
