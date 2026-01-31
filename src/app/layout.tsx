import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import { Toaster } from "sonner";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparsh Shandilya | FullStack Developer",
  description:
    "Sparsh Shandilya | Full-Stack Developer & Tech Enthusiast\n" +
    "Hi there! 👋 I’m Sparsh, a B.Tech Computer Science student at Maharaja Agrasen Institute of Technology, based in Delhi, India. With a passion for building scalable, innovative solutions, I specialize in Full-Stack Development using modern frameworks like Next.js, React.js, TypeScript, and the MERN stack, coupled with DevOps tools like Docker, AWS, and GCP.\n" +
    "\n" +
    "What I Bring to the Table\n" +
    "✅ Core Skills: Expert in JavaScript/TypeScript, React.js, Node.js, and RESTful/WebSocket APIs. Proficient in cloud platforms (AWS, GCP), databases (MongoDB, PostgreSQL), and DevOps (CI/CD, Turborepo).\n" +
    "✅ Proven Impact: Reduced development timelines by 30%+ for clients through agile practices, automated backend code generation with AI (saving 66% time), and achieved 95% code coverage in testing.\n" +
    "✅ Leadership: Led teams in building scalable e-commerce platforms and mentored 50+ students as a CodingNinjas TA, fostering collaborative learning.\n" +
    "\n" +
    "Highlighted Projects\n" +
    "\n" +
    "Nexum: Real-time collaborative code editor using Next.js, WebSockets, and REST APIs.\n" +
    "\n" +
    "Versatile: AI-driven text editor with Quill.js and OpenAI integration, boosting team productivity by 30%.\n" +
    "\n" +
    "RestEZ: Automated REST API code generator with GeminiAI, eliminating boilerplate code.\n" +
    "\n" +
    "Let’s Connect!\n" +
    "I’m always excited to collaborate on cutting-edge projects or discuss tech innovation. Explore my work below or reach out at sparshshandilya123@gmail.com!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9DN91P4TQC"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9DN91P4TQC', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={jetbrains_mono.className}>
        <Navbar />
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
