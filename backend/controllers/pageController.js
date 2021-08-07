import asyncHandler from "express-async-handler"
import Page from "../models/pageModel.js"

//@description Register a new User
//@route POST /api/users
//@access public

const addPage = asyncHandler(async (req, res) => {
  const { title, body } = req.body

  const pageExists = await Page.findOne({ title })

  if (pageExists) {
    res.status(400)
    throw new Error("Page Already Exisit")
  }

  const page = await Page.create({
    title,
    body,
  })
  if (page) {
    res.status(201).json({
      _id: page._id,
      title: page.title,
      body: page.body,
    })
  } else {
    res.status(404)
    throw new Error("Page not Created")
  }
})

export default addPage
