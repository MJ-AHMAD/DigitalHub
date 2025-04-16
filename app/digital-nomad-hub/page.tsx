import Link from "next/link"
import { ArrowRight, Coffee, MapPin, Palmtree, Wifi, Users, Calendar, Laptop, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalNomadHub() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Yunus Inspire Digital Hub</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#facilities" className="text-sm font-medium hover:underline underline-offset-4">
              Facilities
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#location" className="text-sm font-medium hover:underline underline-offset-4">
              Location
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
              Book Now
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
                    Digital Nomad Hub in Cox&apos;s Bazar
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Work from the longest natural sea beach in the world. Fast internet, comfortable workspace, and a
                    vibrant community of remote workers, all supported by Yunus Inspire.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Book a Tour
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-blue-600" />
                    <span>High-Speed WiFi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Coffee className="h-4 w-4 text-blue-600" />
                    <span>Free Coffee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Palmtree className="h-4 w-4 text-blue-600" />
                    <span>Beach View</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Digital Nomad Hub Cox's Bazar"
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
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">About</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">A Special Initiative</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Digital Nomad Hub in Cox&apos;s Bazar is a special project under Yunus Inspire, designed to
                  provide a world-class workspace for digital nomads, remote workers, and local entrepreneurs in the
                  beautiful coastal town of Cox&apos;s Bazar, Bangladesh.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Laptop className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A professional workspace with all the amenities you need to be productive, including high-speed
                    internet, ergonomic furniture, and meeting rooms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join a vibrant community of like-minded professionals, entrepreneurs, and creatives from Bangladesh
                    and around the world.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Palmtree className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Explore</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Experience the natural beauty of Cox&apos;s Bazar, with its stunning beaches, local culture, and
                    unique attractions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="facilities" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Facilities</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">World-Class Amenities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our Digital Nomad Hub provides all the amenities you need to work productively while enjoying the
                  beauty of Cox&apos;s Bazar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Wifi className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Fast Internet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reliable 100Mbps fiber internet connection with backup systems to ensure you stay connected.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Coffee className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Café & Refreshments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Free coffee, tea, and snacks throughout the day to keep you energized and focused.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">Meeting Rooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Private meeting rooms equipped with video conferencing technology for your important calls and
                    meetings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Zap className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">24/7 Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Work whenever inspiration strikes with 24/7 access for monthly members and extended hours for
                    others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Membership Options</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your needs, whether you&apos;re staying for a day or a month.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Day Pass</CardTitle>
                  <CardDescription>Perfect for travelers passing through</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$15</div>
                  <p className="text-sm text-muted-foreground">per day</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Full access from 9am-6pm
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      High-speed internet
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Coffee & refreshments
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </CardFooter>
              </Card>
              <Card className="border-blue-500">
                <CardHeader className="bg-blue-50 dark:bg-blue-950/20 rounded-t-lg">
                  <div className="text-center text-sm font-medium text-blue-600 dark:text-blue-400">Most Popular</div>
                  <CardTitle>Weekly Pass</CardTitle>
                  <CardDescription>For short-term digital nomads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$80</div>
                  <p className="text-sm text-muted-foreground">per week</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      24/7 access
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Dedicated desk
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Meeting room access (2 hours/week)
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Community events
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Pass</CardTitle>
                  <CardDescription>For long-term residents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$250</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      24/7 access
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Premium dedicated desk
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Meeting room access (10 hours/month)
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Storage locker
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-blue-600" />
                      Free beach excursions
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="location" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Location</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Cox&apos;s Bazar, Bangladesh</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Located on the southeastern coast of Bangladesh, Cox&apos;s Bazar is home to the world&apos;s
                    longest natural sea beach (120 km) and offers a unique blend of natural beauty and local culture.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Kolatoli Beach Road, Cox&apos;s Bazar, Bangladesh</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Getting Here</h3>
                  <p className="text-muted-foreground">
                    Cox&apos;s Bazar Airport (CXB) is just 20 minutes away, with daily flights from Dhaka. We offer
                    airport pickup services for our members.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Cox's Bazar Beach"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=620&width=1100"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to book a tour? Reach out to us and we&apos;ll get back to you soon.
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
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <p>Kolatoli Beach Road, Cox&apos;s Bazar, Bangladesh</p>
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
                    <p>digitalnomad@yunusinspire.org</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Book a Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                      />
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
                        htmlFor="date"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Preferred Tour Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Book Tour
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

import { GraduationCap } from "lucide-react"
