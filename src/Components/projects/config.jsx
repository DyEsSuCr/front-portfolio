// Skills
import { api_skills } from './../skills/config'

export function dame(...skillName) {
  const skills = []

  skillName.map((name) => {
    api_skills.map((skill) => {
      skill.name == name && skills.push(skill)
    })
  })

  return skills
}
