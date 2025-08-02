function Message({children}) {
  return (
    <div className="flex items-center justify-center text-base md:text-xl uppercase">
      <p>{children}</p>
    </div>
  )
}

export default Message