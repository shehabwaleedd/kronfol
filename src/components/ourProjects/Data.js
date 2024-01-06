import project1Image from "../../assets/project1/marketvision_88queen1-1.jpg";
import project1Gallery1 from "../../assets/project1/marketvision_88queen2.jpg"
import project1Gallery2 from "../../assets/project1/marketvision_88queen3.jpg"
import project1Gallery3 from "../../assets/project1/marketvision_88queen4.jpg"
import project1Gallery4 from "../../assets/project1/marketvision_88queen5.jpg"
import project1Gallery5 from "../../assets/project1/marketvision_88queen6.jpg"
import project2Image from "../../assets/project3/marketvision_88queen4.jpeg"
import project2Gallery1 from "../../assets/project3/marketvision_reina2.jpg"
import project2Gallery2 from "../../assets/project3/marketvision_reina3.jpg"
import project2Gallery3 from "../../assets/project3/marketvision_reina4.jpg"
import project2Gallery4 from "../../assets/project3/marketvision_reina5.jpg"
import project2Gallery5 from "../../assets/project3/marketvision_reina6.jpg"
import project4Image from "../../assets/project4/marketvision_55charles1-1024x576.jpg"
import project4Gallery1 from "../../assets/project4/marketvision_55charles2.jpg"
import project4Gallery2 from "../../assets/project4/marketvision_55charles3.jpg"
import project4Gallery3 from "../../assets/project4/marketvision_55charles4.jpg"
import project4Gallery4 from "../../assets/project4/marketvision_55charles5.jpg"
import project5Image from "../../assets/project5/marketvision_scout-1024x576.jpg"
import project5Gallery1 from "../../assets/project5/marketvision_scout2.jpg"
import project5Gallery2 from "../../assets/project5/marketvision_scout3.jpg"
import project5Gallery3 from "../../assets/project5/marketvision_scout4.jpg"


const Data = [
    {
        projectName: "88 Queen",
        projectDescription: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilis.",
        projectImage: project1Image,
        projectLocation: "Location 1",
        status: [
            "Now Selling",
            "Under Construction",
        ],
        location: "Queen Street East and Mutual Street, Downtown Toronto",
        sales: "Kronfol",
        details: [
            {
                text: "Description",
                value: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilis."
            },
            {
                text: "Developer",
                value: "Kronfol"
            },
            {
                text: "Architect",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Interior Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Landscape Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Floors & Units",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Amenities",
                value: "neque viverra justo nec ultrices"
            }
        ],
        media: [
            {
                src: project1Gallery1
            },
            {
                src: project1Gallery2
            },
            {
                src: project1Gallery3
            },
            {
                src: project1Gallery4
            },
            {
                src: project1Gallery5
            },

        ],
        map: {
            lat: 0,
            lng: 0
        }
    },
    {
        projectName: "Galleria 40",
        projectDescription: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
        projectImage: project2Image,
        projectLocation: "lacus suspendisse",
        status: [
            "Under Construction",
        ],
        location: "lorem ipsum dolor sit amet consectetur",
        details: [
            {
                text: "Description",
                value: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilis."
            },
            {
                text: "Developer",
                value: "Kronfol"
            },
            {
                text: "Architect",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Interior Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Landscape Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Floors & Units",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Amenities",
                value: "neque viverra justo nec ultrices"
            }
        ],
        media: [
            {
                src: project2Gallery1
            },
            {
                src: project2Gallery2
            },
            {
                src: project2Gallery3
            },
            {
                src: project2Gallery4
            },
            {
                src: project2Gallery5
            },

        ],
        map: {
            lat: 0,
            lng: 0
        }
    },
    {
        projectName: "Sphinx Avenue",
        projectDescription: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
        projectImage: project4Image,
        projectLocation: "lacus suspendisse",
        status: [
            "Now Selling",
            "Under Construction",
        ],
        location: "lorem ipsum dolor sit amet consectetur",
        details: [
            {
                text: "Description",
                value: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilis."
            },
            {
                text: "Developer",
                value: "Kronfol"
            },
            {
                text: "Architect",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Interior Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Landscape Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Floors & Units",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Amenities",
                value: "neque viverra justo nec ultrices"
            }
        ],
        media: [
            {
                src: project4Gallery1
            },
            {
                src: project4Gallery2
            },
            {
                src: project4Gallery3
            },
            {
                src: project4Gallery4
            },
        ],
        map: {
            lat: 0,
            lng: 0
        }
    },
    {
        projectName: "The One",
        projectDescription: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi",
        projectImage: project5Image,
        projectLocation: "lacus suspendisse",
        status: [
            "Now Selling",
            "Under Construction",
        ],
        location: "lorem ipsum dolor sit amet consectetur",
        details: [
            {
                text: "Description",
                value: "etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilis."
            },
            {
                text: "Developer",
                value: "Kronfol"
            },
            {
                text: "Architect",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Interior Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Landscape Designer",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Floors & Units",
                value: "neque viverra justo nec ultrices"
            },
            {
                text: "Amenities",
                value: "neque viverra justo nec ultrices"
            }
        ],
        media: [
            {
                src: project5Gallery1
            },
            {
                src: project5Gallery2
            },
            {
                src: project5Gallery3
            },
        ],
        map: {
            lat: 0,
            lng: 0
        }
    },


]

export default Data;