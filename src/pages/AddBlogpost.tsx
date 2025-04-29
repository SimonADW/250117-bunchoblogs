import AddBlogpostForm from '../components/AddBlogpostForm/AddBlogpostForm'

type AddblogpostPropTypes = {
	userName: string;
}

const AddBlogpost = ({userName}: AddblogpostPropTypes) => {
  return (
    <>
      <h2 style={{fontSize:"36px", color: "var(--secondary-color)", fontFamily: "georgia"}}>New blogpost in the making...?</h2>
      <AddBlogpostForm userName={userName} />
    </>
  )
}

export default AddBlogpost