export function AvatarImage({
  src = "https://pbs.twimg.com/profile_images/1028605252168105990/xdHiCPOa_bigger.jpg",
}) {
  return (
    <img
      className="w-12 rounded-full cursor-pointer"
      src={src}
      alt="User avatar"
    />
  )
}

function Avatar() {
  return (
    <div className="py-3 pr-4">
      <AvatarImage />
    </div>
  )
}

export default Avatar
