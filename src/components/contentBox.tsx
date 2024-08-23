export default function ContentBox({children}: {children: React.ReactNode}) {
  return (
    <div className="border-2 border-black border-solid bg-blue-100 p-6 rounded-xl">
      {children}
    </div>
  )
}