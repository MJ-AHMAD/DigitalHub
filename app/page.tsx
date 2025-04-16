import Link from "next/link"
import { ArrowRight, BookOpen, Code, Globe, GraduationCap, Lightbulb, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Yunus Inspire Digital Hub</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium hover:underline underline-offset-4">
              Courses
            </Link>
            <Link href="#resources" className="text-sm font-medium hover:underline underline-offset-4">
              Resources
            </Link>
            <Link href="#community" className="text-sm font-medium hover:underline underline-offset-4">
              Community
            </Link>
            <Link href="/digital-nomad-hub" className="text-sm font-medium hover:underline underline-offset-4">
              Digital Nomad Hub
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Join Now
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Empowering Bangladesh&apos;s Future Innovators
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Inspired by Nobel Laureate Professor Muhammad Yunus, we provide free access to quality educational
                    resources in technology, programming, and innovation for Bangladeshi students.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Learning
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span>Free Courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="h-4 w-4 text-blue-600" />
                    <span>Interactive Learning</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>Community Support</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Students learning technology"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=620&width=1100"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Vision & Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Yunus Inspire Digital Hub is a special project under Yunus Inspire, dedicated to empowering
                  Bangladeshi students through free, accessible resources in technology, ensuring every learner can
                  unlock their potential.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>Our Vision</CardTitle>
                    <CardDescription>Creating tomorrow&apos;s leaders</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To create a generation of confident, skilled, and ethical leaders who will drive innovation, unity,
                    and sustainable development in Bangladesh, inspired by the principles of Professor Muhammad Yunus.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>Our Mission</CardTitle>
                    <CardDescription>Empowering through education</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    To inspire and enable Bangladeshi students through free, accessible resources in technology,
                    ensuring every learner can contribute meaningfully to a prosperous and equitable society.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl py-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Core Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <h3 className="font-bold">Empowerment</h3>
                      <p className="text-sm text-muted-foreground">
                        Providing students with knowledge, tools, and mentorship to succeed in the digital world.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Equality</h3>
                      <p className="text-sm text-muted-foreground">
                        Ensuring equal access for all, irrespective of socio-economic background.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Innovation</h3>
                      <p className="text-sm text-muted-foreground">
                        Fostering creativity and problem-solving through modern technology.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Collaboration</h3>
                      <p className="text-sm text-muted-foreground">
                        Encouraging teamwork and a shared vision for growth.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Sustainability</h3>
                      <p className="text-sm text-muted-foreground">
                        Promoting responsible and sustainable technological practices.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Integrity</h3>
                      <p className="text-sm text-muted-foreground">
                        Upholding honesty, respect, and social responsibility in all our endeavors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Courses</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Free Quality Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our range of courses to kickstart your learning journey in technology and programming.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>HTML Basics</CardTitle>
                  <CardDescription>Learn the fundamentals of web development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Master the building blocks of websites with our comprehensive HTML course designed for beginners.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Python for Beginners</CardTitle>
                  <CardDescription>Unlock the power of programming</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Start your programming journey with Python, one of the most versatile and beginner-friendly
                    languages.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Essentials</CardTitle>
                  <CardDescription>Collaborate and manage code effectively</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn how to use GitHub for version control, collaboration, and showcasing your projects to the
                    world.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Science Intro</CardTitle>
                  <CardDescription>Analyze data for actionable insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover how to extract meaningful insights from data and start your journey in this high-demand
                    field.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Resources</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Interactive Learning Tools</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access a variety of resources designed to enhance your learning experience and help you master new
                  skills.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Code className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Interactive Code Editor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Practice coding in real-time with our interactive editor that supports multiple programming
                    languages.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Try Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                  <CardTitle className="text-xl">Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Watch step-by-step video tutorials created by industry experts to help you understand complex
                    concepts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Watch Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <CardTitle className="text-xl">Study Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Download comprehensive study guides and reference materials to support your learning journey.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Community</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Growing Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow learners, share knowledge, and grow together in our supportive community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Discussion Forums</CardTitle>
                  <CardDescription>Ask questions and share knowledge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our active forums are the perfect place to ask questions, share your projects, and connect with
                    peers who are on the same learning journey.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Discussion</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Programs</CardTitle>
                  <CardDescription>Learn from experienced professionals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Get guidance from industry professionals who volunteer their time to help students navigate their
                    learning path and career development.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Find a Mentor</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl py-8">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold">Web Development Workshop</h3>
                        <p className="text-sm text-muted-foreground">
                          Join our hands-on workshop to build your first responsive website using HTML, CSS, and
                          JavaScript.
                        </p>
                        <p className="text-sm font-medium">May 15, 2025 • 10:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold">Python Coding Challenge</h3>
                        <p className="text-sm text-muted-foreground">
                          Test your Python skills in our monthly coding challenge and win exciting prizes.
                        </p>
                        <p className="text-sm font-medium">June 5, 2025 • Online Event</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">View All Events</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="founder" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Founder</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Founder</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about the visionary behind Yunus Inspire Digital Hub
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col items-center justify-center space-y-4 md:items-start md:justify-start">
                      <img
                        alt="Md Jafor Ahmad"
                        className="aspect-square overflow-hidden rounded-full object-cover object-center"
                        height="200"
                        src="/placeholder.svg?height=200&width=200"
                        width="200"
                      />
                      <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold">Md Jafor Ahmad</h3>
                        <p className="text-sm text-muted-foreground">Founder, Yunus Inspire Digital Hub</p>
                      </div>
                      <div className="flex gap-4">
                        <Link href="https://linkedin.com/in/jafor-ahmad" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-blue-600"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </Link>
                        <Link href="https://github.com/MJ-AHMAD" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-blue-600"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <blockquote className="italic text-muted-foreground">
                        "Yunus Inspire Digital Hub is the manifestation of my dream to empower youth through knowledge,
                        unity, and innovation. I believe that education is the cornerstone of progress, and together we
                        can build a brighter future for Bangladesh."
                      </blockquote>
                      <div className="space-y-2">
                        <h4 className="font-semibold">About Md Jafor Ahmad</h4>
                        <p className="text-sm text-muted-foreground">
                          Md Jafor Ahmad, widely known as MJ Ahmad, is a visionary leader, social worker, and dedicated
                          citizen of Bangladesh. Driven by a profound belief in the transformative potential of
                          education and technology, he has devoted his life to inspiring change and empowering the next
                          generation of Bangladeshi innovators.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          As the founder of Yunus Inspire Digital Hub, he continues to create bridges between resources
                          and communities, focusing on education and long-term development. His vision is inspired by
                          the principles and values of Nobel Laureate Professor Muhammad Yunus.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Skills & Expertise</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                            Strategic Leadership and Management
                          </li>
                          <li className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                            Social Advocacy and Community Engagement
                          </li>
                          <li className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                            Transparent and Ethical Decision-Making
                          </li>
                          <li className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-blue-600" />
                            Technical and Creative Problem-Solving
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to get involved? Reach out to us and we&apos;ll get back to you soon.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <p>+880 1336221217</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <p>mjahmad2024@outlook.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <p>www.yunusinspire.org</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Yunus Inspire Digital Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
