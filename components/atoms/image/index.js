import Image from 'next/image'

function User(props) {
  return (
    <Image
      src='/images/user.jpg'
      alt='User Imagen'
      width='100%'
      height='100%'
    ></Image>
  )
}

export default User
