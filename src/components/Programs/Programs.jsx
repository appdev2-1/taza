import React, { useEffect, useState } from 'react';
import './Programs.css';
import { storage } from '/src/components/firebase';
import { ref, getDownloadURL } from "firebase/storage";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const programsData = [
  {
    title: "Barista Training",
    iconPath: "images/program-icon-1.png",
    imagePath: "images/barista (5).jpg",
    description: "Learn the art of coffee making and customer service.",
    fee: "20,500/- per Term",
    duration: "1 month",
    examBody: "NiTA",
  },
  {
    title: "Certified Nurse Assistant",
    iconPath: "images/program-icon-2.png",
    imagePath: "images/caregiving.jpg",
    description: "Gain the skills needed to assist in patient care.",
    fee: "17,500/- per Term (First Aid Care 3,000/-)",
    duration: "4 months",
    examBody: "NiTA",
  },
  {
    title: "Mixology",
    iconPath: "images/program-icon-3.png",
    imagePath: "images/mixology.jpg",
    description: "Master the craft of cocktail mixing and presentation.",
    fee: "20,500/-",
    duration: "1 month",
    examBody: "NiTA",
  },
  {
    title: "Certificate in Plumbing & Pipe Fitting",
    iconPath: "images/program-icon4.png",
    imagePath: "images/plumbing.jpg",
    description: "Learn plumbing and pipe fitting techniques for various settings.",
    fee: "11,000/- per Term",
    duration: "3 terms",
    examBody: "NITA",
  },
  {
    title: "Hospitality Management",
    iconPath: "images/program-icon5.png",
    imagePath: "images/DSC_6240.jpg",
    description: "Develop skills in hospitality and customer relations.",
    fee: "20,500/-",
    duration: "4 terms",
    examBody: "NITA",
  },
  {
    title: "Front Office",
    iconPath: "images/program-icon6.png",
    imagePath: "images/frontoffice.jpg",
    description: "Training in front office operations and management.",
    fee: "19,000/-",
    duration: "4 terms",
    examBody: "NITA",
  },
  {
    title: "German Language",
    iconPath: "images/program-icon7.jpeg",
    imagePath: "images/german.jpg",
    description: "Learn German language skills for communication.",
    fee: "20,000/-",
    duration: "1 term",
    examBody: "Internal ",
  },
  {
    title: "Baking and Pastry",
    iconPath: "images/program-icon8.jpeg",
    imagePath: "images/baking.jpg",
    description: "Hands-on training in baking and pastry creation.",
    fee: "28,000/-",
    duration: "1 term",
    examBody: "Internal",
  },
  {
    title: "Computer Packages",
    iconPath: "images/program-icon9.png",
    imagePath: "images/computer.jpg",
    description: "Basic to advanced computer applications.",
    fee: "4,500/-",
    duration: "1 month",
    examBody: "Internal",
  },
];

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImagesAndIcons = async () => {
      try {
        const updatedPrograms = await Promise.all(
            programsData.map(async (program) => {
              const imageRef = ref(storage, program.imagePath); // Use the new imagePath key
              const imageUrl = await getDownloadURL(imageRef);

              const iconRef = ref(storage, program.iconPath);
              const iconUrl = await getDownloadURL(iconRef);

              return { ...program, image: imageUrl, icon: iconUrl }; // Include the image URL and icon URL
            })
        );
        setPrograms(updatedPrograms);
      } catch (err) {
        console.error("Error fetching images and icons:", err);
        setError("Error fetching program images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImagesAndIcons();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <p>{error}</p>;

  return (
      <section className='programs-section'>
        <h1>Our Programs</h1>
        <Grid container spacing={3} className='programs'>
          {programs.map((program, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="program">
                  <img
                      src={program.image} // Use the fetched image URL
                      alt={`${program.title} - ${program.description}`}
                      className='program-img'
                      loading="lazy"
                  />
                  <div className="caption">
                    <img
                        src={program.icon} // Use the fetched icon URL
                        alt={`${program.title} Icon`}
                        className='program-icon'
                        loading="lazy"
                    />
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <p><strong>Exam Body:</strong> {program.examBody}</p>
                    <p><strong>Duration:</strong> {program.duration}</p>
                    <p><strong>Fee:</strong> {program.fee}</p>
          
                  </div>
                </div>
              </Grid>
          ))}
        </Grid>

        {/* Admissions Process Section */}
        <section id="admissions-process" className="admissions-process">
          <h2>Admissions Process</h2>
          <p>Intake still ongoing.</p>
          <section className='location-section'>
            <p>
              <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Visit our Githunguri main campus Rahab Towers 1st Floor.
            </p>
          </section>
        </section>

        {/* Fee Payment Section */}
        <section id="fee-payment" className="fee-payment">
          <h2>Fee Payment</h2>
          <p>Details on our fee structure, available payment methods, and financial aid options.</p>
          <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course</TableCell>
                  <TableCell>Exam Body</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Fee</TableCell>
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {programs.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.examBody}</TableCell>
                      <TableCell>{row.duration}</TableCell>
                      <TableCell>{row.fee}</TableCell>
                    
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>

        {/* Accommodation Section */}
        <section id="accommodation" className="accommodation">
          <h2>Accommodation</h2>
          <p>Information on on-campus and off-campus housing options, including costs and policies.</p>
        </section>

        {/* Apply Now Button */}
        <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
              variant="contained"
              color="primary"
              href="/ApplicationForm"
              sx={{ fontSize: '18px', padding: '10px 20px' }}
          >
            Apply Now
          </Button>
        </Container>

        {/* Footer */}
        <footer>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/TazalinCollege" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-600" aria-label="Facebook">
              <FacebookIcon /> <span>Facebook</span>
            </a>
            <a href="https://twitter.com/TazalinCollege" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400" aria-label="Twitter">
              <TwitterIcon /> <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/TazalinCollege" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-pink-600" aria-label="Instagram">
              <InstagramIcon /> <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/TazalinCollege" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-700" aria-label="LinkedIn">
              <LinkedInIcon /> <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-center mt-4">&copy; 2024 TAZALIN COLLEGE. All Rights Reserved.</p>
        </footer>
      </section>
  );
}

export default Programs;
