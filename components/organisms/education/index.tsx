import Title from '@atoms/title'
import Course from '@molecules/course'


const Education: React.FC = () => {
  return(
    <>
      <Title>Education</Title>

      <Course
      title='React'
      date='2020'
      description='Curso de React' />
    </>
  )
}

export default Education