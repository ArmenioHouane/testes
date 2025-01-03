'use client'
import Navbar from '../navbar'
import Footer from '../footer'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"


const serviceTypes = [
  "Web Development Services",
  "UI/UX Design Services",
  "eCommerce Solutions",
  "API Development and Integration",
  "Database Management Services",
  "Performance Optimization",
  "DevOps and Hosting",
  "Technical Consulting",
  "Training and Mentorship"
]

const importanceLevels = ["Low", "Medium", "High", "Critical"]
const timePeriods = ["1 Week", "1 Month", "3 Months", "6 Months"]

const priceRanges = {
  "1 Week": {
    "Low": { min: 300, max: 500 },
    "Medium": { min: 500, max: 800 },
    "High": { min: 800, max: 1200 },
    "Critical": { min: 1500, max: 2000 }
  },
  "1 Month": {
    "Low": { min: 1000, max: 2000 },
    "Medium": { min: 2000, max: 3500 },
    "High": { min: 3500, max: 5000 },
    "Critical": { min: 6000, max: 8000 }
  },
  "3 Months": {
    "Low": { min: 3000, max: 6000 },
    "Medium": { min: 6000, max: 10000 },
    "High": { min: 10000, max: 15000 },
    "Critical": { min: 18000, max: 25000 }
  },
  "6 Months": {
    "Low": { min: 5000, max: 10000 },
    "Medium": { min: 10000, max: 18000 },
    "High": { min: 18000, max: 25000 },
    "Critical": { min: 30000, max: 40000 }
  }
}

export default function ServicePage() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [description, setDescription] = useState('')
  const [importance, setImportance] = useState('')
  const [time, setTime] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 })
  const [esteemedPrice, setEsteemedPrice] = useState(0)
  const [negotiatePrice, setNegotiatePrice] = useState(0)

  const [nameValid, setNameValid] = useState<boolean | null>(null)
  const [contactValid, setContactValid] = useState<boolean | null>(null)
  const [emailValid, setEmailValid] = useState<boolean | null>(null)

  useEffect(() => {
    updatePriceRange()
  }, [time, importance])

  useEffect(() => {
    if (nameValid === true) {
      const timer = setTimeout(() => setNameValid(null), 2000)
      return () => clearTimeout(timer)
    }
  }, [nameValid])

  useEffect(() => {
    if (contactValid === true) {
      const timer = setTimeout(() => setContactValid(null), 2000)
      return () => clearTimeout(timer)
    }
  }, [contactValid])

  useEffect(() => {
    if (emailValid === true) {
      const timer = setTimeout(() => setEmailValid(null), 2000)
      return () => clearTimeout(timer)
    }
  }, [emailValid])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ 
      name, 
      contact, 
      email, 
      serviceType, 
      description, 
      importance, 
      time, 
      priceRange, 
      esteemedPrice,
      negotiatePrice 
    })
  }

  const updatePriceRange = () => {
    if (time && importance) {
      const range = priceRanges[time as keyof typeof priceRanges][importance as keyof (typeof priceRanges)[keyof typeof priceRanges]]
      setPriceRange(range)
      setEsteemedPrice(Math.round((range.min + range.max) / 2))
      setNegotiatePrice(Math.round((range.min + range.max) / 2))
    }
  }

  const validateInput = (value: string, regex: RegExp, setValidState: React.Dispatch<React.SetStateAction<boolean | null>>) => {
    const isValid = regex.test(value)
    setValidState(isValid)
    return isValid
  }

  return (<>
    <Navbar />
    <div className='dark:bg-[#1C1B1E]'>
<div className="container mx-auto py-10 dark:bg-[#1A1A1B]">
      <Card className='dark:bg-[#1C1B1E] rounded dark:border-[#3b3b3b]'>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Request a Service</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => {
                    const isValid = validateInput(e.target.value, /^[a-zA-Z\s]*$/, setNameValid)
                    if (isValid) {
                      setName(e.target.value)
                    }
                  }} 
                  required 
                  className={`rounded dark:bg-[#212024] dark:border-[#3b3b3b] 
                    ${nameValid === false ? 'border-red-500' : ''}
                    ${nameValid === true ? 'border-green-500' : ''}
                  `}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Input 
                  id="contact" 
                  value={contact} 
                  onChange={(e) => {
                    const isValid = validateInput(e.target.value, /^[0-9+\-\s]*$/, setContactValid)
                    if (isValid) {
                      setContact(e.target.value)
                    }
                  }} 
                  required 
                  className={`rounded dark:bg-[#212024] dark:border-[#3b3b3b]
                    ${contactValid === false ? 'border-red-500' : ''}
                    ${contactValid === true ? 'border-green-500' : ''}
                  `}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => {
                  const isValid = validateInput(e.target.value, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, setEmailValid)
                  if (isValid) {
                    setEmail(e.target.value)
                  }
                }} 
                required 
                className={`rounded dark:bg-[#212024] dark:border-[#3b3b3b]
                  ${emailValid === false ? 'border-red-500' : ''}
                  ${emailValid === true ? 'border-green-500' : ''}
                `}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <Select value={serviceType} onValueChange={setServiceType} required>
                <SelectTrigger className='rounded dark:bg-[#212024] dark:border-[#3b3b3b]'>
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Service Description</Label>
              <Textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Please describe the service you need"
                required
                className='rounded dark:bg-[#212024] dark:border-[#3b3b3b]'
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="importance">Project Importance</Label>
                <Select  value={importance} onValueChange={setImportance} required>
                  <SelectTrigger className='rounded dark:bg-[#212024] dark:border-[#3b3b3b]'>
                    <SelectValue  placeholder="Select importance" />
                  </SelectTrigger>
                  <SelectContent>
                    {importanceLevels.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time Period</Label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger className='rounded dark:bg-[#212024] dark:border-[#3b3b3b] '>
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    {timePeriods.map((period) => (
                      <SelectItem key={period} value={period}>{period}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {priceRange.max > 0 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <div className="text-lg font-semibold">${priceRange.min} - ${priceRange.max}</div>
                </div>
                <div className="space-y-2">
                  <Label>Esteemed Price</Label>
                  <div className="text-xl font-bold text-primary">${esteemedPrice}</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="negotiate-price">Negotiate Price</Label>
                  <div className="flex items-center space-x-4">
                    <Slider
                      id="negotiate-price"
                      min={priceRange.min}
                      max={priceRange.max}
                      step={10}
                      value={[negotiatePrice]}
                      onValueChange={(value) => setNegotiatePrice(value[0])}
                    />
                    <Input
                      type="number"
                      
                      value={negotiatePrice}
                      onChange={(e) => {
                        const value = parseInt(e.target.value)
                        if (value >= priceRange.min && value <= priceRange.max) {
                          setNegotiatePrice(value)
                        }
                      }}
                      className="w-24 rounded "
                    />
                  </div>
                </div>
              </div>
            )}
            <Button type="submit" className="w-full bg-black text-white hover:bg-[#d1d1d1] hover:text-black dark:bg-white rounded dark:hover:bg-black dark:hover:text-white dark:text-black">Submit Request</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
    <Footer />
    </>
  )
}

