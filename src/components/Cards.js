import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    function getCourses() {
      if (category === "All") {
        let allCourses = [];
        Object.values(courses).forEach((array) => {
          array.forEach((courseData) => {
            allCourses.push(courseData);
          });
        });
        return allCourses;
      } else {
        return courses[category] || [];
      }
    }

    setFilteredCourses(getCourses());
  }, [courses, category]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {filteredCourses.length === 0 ? (
        <div>
          <p>NO DATA FOUND</p>
        </div>
      ) : (
        filteredCourses.map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
