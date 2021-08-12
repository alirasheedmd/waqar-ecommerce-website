import asyncHandler from "express-async-handler"
import Page from "../models/pageModel.js"
import slugify from "slugify"

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
    slug: slugify(`${title}`).toLowerCase(),
  })
  if (page) {
    res.status(201).json({
      _id: page._id,
      title: page.title,
      body: page.body,
      slug: page.slug,
    })
  } else {
    res.status(404)
    throw new Error("Page not Created")
  }
})

//@description Register a new User
//@route POST /api/users
//@access public

const listPages = asyncHandler(async (req, res) => {
  const pages = await Page.find({})
  res.status(200).json(pages)
})

const getPageById = asyncHandler(async (req, res) => {
  const page = await Page.find({ slug: req.params.slug })
  if (page) {
    res.json(...page)
  } else {
    res.status(404)
    throw new Error("Page not found")
  }
})

//@description Register a new User
//@route POST /api/users
//@access public

const editPageById = asyncHandler(async (req, res) => {
  const id = req.params.id
  const page = await Page.findById(id)
  if (page) {
    page.title = req.body.title || page.title
    page.body = req.body.body || page.body
    page.slug = slugify(`${page.title}`).toLowerCase() || page.slug
    const updatedPage = await page.save()
    res.json(updatedPage)
  } else {
    res.status(404)
    throw new Error("Page not found")
  }
})

//@description Register a new User
//@route POST /api/users
//@access public

const deletePageById = asyncHandler(async (req, res) => {
  const id = req.params.id
  const page = await Page.findById(id)
  if (page) {
    await Page.deleteOne(page)
    res.status(200).json({ message: "Product Deleted" })
  } else {
    res.status(404)
    throw new Error("Page not found")
  }
})

export { addPage, listPages, getPageById, editPageById, deletePageById }
