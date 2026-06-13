import { useState } from 'react'
import { UserPlus, CheckCircle2, Circle } from 'lucide-react'

const initialMembers = [
  { name: 'You', role: 'Executor', tasks: ['Upload documents', 'Generate closure letters'], completed: [true, true] },
  { name: 'Mom', role: 'Spouse', tasks: ['Verify bank details', 'Sign insurance claim form'], completed: [true, false] },
  { name: 'Rohan', role: 'Adult Child', tasks: ['Cancel subscriptions', 'Visit Sub-Registrar office'], completed: [false, false] },
]

export default function Family() {
  const [members, setMembers] = useState(initialMembers)

  function toggleTask(memberIndex, taskIndex) {
    setMembers((prev) =>
      prev.map((member, mi) =>
        mi !== memberIndex
          ? member
          : {
              ...member,
              completed: member.completed.map((done, ti) => (ti === taskIndex ? !done : done)),
            }
      )
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-warm-gray">
      <div className="text-center mb-10">
        <p className="text-sage-dark font-medium mb-2 tracking-wide text-sm uppercase">Family Workspace</p>
        <h1 className="font-serif text-3xl md:text-4xl text-sage-dark mb-3">
          You don't have to carry this alone
        </h1>
        <p className="max-w-xl mx-auto leading-relaxed">
          Everyone in the family can see what's done, what's pending, and who's
          responsible for what.
        </p>
      </div>

      <div className="space-y-5 mb-10">
        {members.map((member, mi) => (
          <div key={mi} className="bg-white/60 border border-sage/20 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium text-sage-dark">{member.name}</p>
              <span className="text-xs bg-sage/10 text-sage-dark px-3 py-1 rounded-full">{member.role}</span>
            </div>
            <div className="space-y-2">
              {member.tasks.map((task, ti) => (
                <button
                  key={ti}
                  onClick={() => toggleTask(mi, ti)}
                  className="w-full flex items-center gap-2 text-sm text-left hover:text-sage-dark transition"
                >
                  {member.completed[ti] ? (
                    <CheckCircle2 size={18} className="text-sage-dark" />
                  ) : (
                    <Circle size={18} className="text-warm-gray/40" />
                  )}
                  <span className={member.completed[ti] ? 'line-through text-warm-gray/50' : ''}>{task}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="border-2 border-sage-dark text-sage-dark px-8 py-4 rounded-full font-medium text-lg hover:bg-sage-dark hover:text-cream transition inline-flex items-center gap-2 mx-auto">
          <UserPlus size={20} />
          Invite a family member
        </button>
      </div>
    </div>
  )
}