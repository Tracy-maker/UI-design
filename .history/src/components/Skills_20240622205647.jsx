import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Shop from "./models/Shop";
import Loader from "../components/Loader";
import Section from "./models/Section";
import { skills } from "./constants";

// Define an array of pastel colors
const pastelColors = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Light Orange
  "#FFFFBA", // Light Yellow
  "#BAFFC9", // Light Green
  "#BAE1FF", // Light Blue
  "#CBA6C3", // Light Purple
];

{ category: "Visual Design", items: ["Color Theory", "Typography", "Icon Design", "Layout Design", "Visual Hierarchy"] },
{ category: "User Experience (UX)", items: ["User Research", "Information Architecture", "Interaction Design", "Usability Testing"] },
{ category: "Prototyping", items: ["Wireframing", "High-Fidelity Prototyping", "Tool Proficiency (Sketch, Figma, Adobe XD)"] }
];
