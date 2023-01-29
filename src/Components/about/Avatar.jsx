// Image
import avatar from './../../assets/avatar.png'

export const Avatar = () => {
  return (
    <div className="pt-[18vh] flex justify-center mb-[5vh] lg:order-2 lg:mb-0">
      <img
        className="duration-200 h-[35vh] w-[35vh] rounded-[50%] border-none bg-white
            shadow-[50px_50px_0_0_rgba(19,169,211,1)] hover:shadow-none hover:translate-x-8
            hover:translate-y-8 lg:h-[50vh] lg:w-[50vh]"
        src={avatar}
        alt="Dylan Suarez"
      />
    </div>
  )
}
