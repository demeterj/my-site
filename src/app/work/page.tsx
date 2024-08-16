"use client"
import ResumeHeader from './Header' 
import ResumeSection from './ResumeSection'
import * as resumeContent from './resumeInfo'
import { useState } from 'react'

export default function Resume() {
  let [activeSection, setActiveSection] = useState(resumeContent.sections[0].key)
  function handleSectionClick(sectionKey: string) {
    if (sectionKey !== activeSection) {
      setActiveSection(sectionKey)
    }
    const resumeBlock = document.getElementById("resume-block")
    const resumeSectionEl = document.getElementById(sectionKey)
    if (resumeSectionEl && resumeBlock) {
      const y = resumeSectionEl.getBoundingClientRect().top - resumeBlock.getBoundingClientRect().top
      resumeBlock.scroll({
        behavior: 'smooth',
        top: resumeBlock.scrollTop + y
      })
    }
  }

  return (
    <div className="xl:px-[300px] px-[10%] pt-[30px] max-h-[81vh] flex flex-col">
      <ResumeHeader />
      <div className="flex border-y-2 justify-evenly overflow-hidden">
        <div className="flex flex-col space-y-4 overflow-visible w-[20%] mt-[30px]">
          {resumeContent.sections.map(section => (
            <div
              key={section.key}
              onClick={() => handleSectionClick(section.key)}
              className="flex items-center hover:cursor-pointer"
            >
              <span className={"transition-all ease-in-out h-[1px] bg-black mr-2 " + (section.key === activeSection ? "bg-blue-900 w-10" : "w-4")}></span>
              <a
                className={"" + (section.key === activeSection && "text-blue-900")}
              >
                {section.label}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col overflow-scroll w-[60%] pb-[500px] " id="resume-block">
          {
            resumeContent.resume.map(section => (
              <ResumeSection key={section.key} id={section.key} resumeItems={section.content} />
            ))
          }
        </div>
      </div>
    </div>
  )
}