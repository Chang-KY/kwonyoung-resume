"use client"

import {projects} from "@/data/Portfolio";
import {FiExternalLink} from "react-icons/fi";
import {FaGithub, FaBookOpen} from "react-icons/fa";
import Modal from "@/components/Modal";
import {useState} from "react";
import IframeUrl from "@/components/IframeUrl";

export default function ProjectList({project}: { project: projects }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <article className="p-6 text-left space-y-6">
      {/* 제목 + 요약 */}
      <div>
        <h4 className="text-base font-semibold text-gray-900">{project.title}</h4>
        <p className="text-sm text-gray-700 mt-1">{project.summary}</p>
      </div>

      {/* 설명 */}
      <p className="text-sm text-gray-700 leading-relaxed">
        {project.description}
      </p>

      {/* 이미지 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center sm:place-items-start">
        {project.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${project.title} 이미지 ${idx}`}
            className="rounded shadow size-72"
          />
        ))}
      </div>

      {/* 기능 */}
      <ul className="list-disc list-inside text-sm space-y-1 text-gray-800">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* 기술 스택 + 링크 */}
      <div className="text-xs text-gray-600 space-y-1 pt-4 border-t border-gray-200">
        <p><strong>Frontend:</strong> {project.frontend}</p>
        <p><strong>Backend:</strong> {project.backend}</p>
        <p><strong>Infra:</strong> {project.infra}</p>

        <div className="flex gap-4 mt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-600 underline underline-offset-4 hover:underline hover:text-gray-800 transition"
          >
            <FiExternalLink className="size-4"/>
            <span>Live</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-600 underline underline-offset-4 hover:underline hover:text-gray-800 transition"
          >
            <FaGithub className="size-4"/>
            <span>GitHub</span>
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-1 text-sm text-gray-600 underline
              cursor-pointer underline-offset-4 hover:underline hover:text-gray-800 transition"
          >
            <FaBookOpen className="size-4"/>
            Detail
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <IframeUrl url={project.notionUrl}/>
      </Modal>
    </article>
  );
}
