const express = require("express");
const prisma = require("../prisma/client");
const bycript = require("bcryptjs");
const { validationResult } = require("express-validator");

// function find user
const findUsers = async (req, res) => {
  try {
    // get all users from database
    const user = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    // send response
    res.status(200).send({
      success: true,
      message: "Get all users successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const createUser = async (req, res) => {
  // periksa
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  const hashedPassword = await bycript.hash(req.body.password, 10);

  try {
    //insert data
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    res.status(201).send({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    req.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const findUserByid = async (req, res) => {
  // get id from params
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // send respone
    res.status(200).send({
      success: true,
      message: `Get user By ID :${id}`,
      data: user,
    });
  } catch (error) {
    req.status(500).send({
      success: false,
      message: "Internal serve error",
    });
  }
};

const updateUser = async (req, res) => {
  // get ID from params
  const { id } = req.params;

  // periksa hasil validasi
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: true,
      message: "Validation error",
      errors: errors.array(),
    });
  }

  // hash password
  const hashedPassword = await bycript.hash(req.body.password, 10);

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    // send response

    res.status(200).send({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // delete user
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    // send response
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
module.exports = {
  findUsers,
  createUser,
  findUserByid,
  updateUser,
  deleteUser,
};
