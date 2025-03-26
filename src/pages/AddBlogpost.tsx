import AddBlogpostForm from '../components/AddBlogpostForm/AddBlogpostForm'

const AddBlogpost = () => {
  return (
    <>
      <h2 style={{fontSize:"36px", color: "var(--secondary-color)", fontFamily: "georgia"}}>New blogpost in the making...?</h2>
      <AddBlogpostForm />
    </>
  )
}

export default AddBlogpost