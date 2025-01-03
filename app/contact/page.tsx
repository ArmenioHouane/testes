
"use client";


import React from 'react';
import { Navbar } from '../navbar';
import Footer from '../footer';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { useState } from "react"

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    // Reset form
    event.currentTarget.reset()
  }







  return (
<>

<Navbar />
<main className="container mx-auto px-4 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
            <p className="text-muted-foreground mt-2">
              I&apos;m always open to new opportunities and interesting projects.
            </p>
          </div>

          <div className="space-y-4">
            <Card className='rounded dark:border-[#3b3b3b] dark:bg-[#1A1A1B]'>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:armenioamalio2003@gmail.com" className="text-sm hover:underline">
                    armenioamalio2003@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="https://github.com/ArmenioHouane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <a
                    href="http://www.linkedin.com/in/arménio-houane-b32246242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className='rounded dark:bg-[#1A1A1B] dark:border-[#3b3b3b] '>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Send a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                className='rounded dark:border-[#3b3b3b] dark:bg-[#1A1A1B] '
                  id="name"
                  name="name"
                  placeholder="Armenio Houane"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                className='rounded dark:border-[#3b3b3b] dark:bg-[#1A1A1B] '
                  id="email"
                  name="email"
                  type="email"
                  placeholder="user@example.com"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  className="min-h-[150px] rounded dark:border-[#3b3b3b] dark:bg-[#1A1A1B]"
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full  bg-black text-white hover:bg-[#d1d1d1] hover:text-black dark:bg-white rounded dark:hover:bg-black dark:hover:text-white dark:text-black" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>


      <Footer />


      </>
  );
};

export default ContactPage;
