export default function Courses() {
  return (
    <section className="mb-8 print:mb-6" id="certifications">
      <h2 className="text-2xl font-bold mb-4 text-purple-500">Certifications</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">AWS Certified Solutions Architect – Associate</h3>
              <p className="text-gray-600 dark:text-gray-400">Amazon Web Services (AWS)</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400">2023</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Professional Scrum Master I (PSM I)</h3>
              <p className="text-gray-600 dark:text-gray-400">Scrum.org</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400">2022</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Certified Kubernetes Administrator (CKA)</h3>
              <p className="text-gray-600 dark:text-gray-400">The Linux Foundation</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400">2022</span>
          </div>
        </div>
      </div>
    </section>
  )
} 