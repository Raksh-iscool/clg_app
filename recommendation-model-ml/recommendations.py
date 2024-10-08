# -*- coding: utf-8 -*-
"""recommendation-model.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1nNqsLP-JjbqdkQcDruUZc9NURp3hLIVw

Recommend Students
"""

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load the students dataset
students_df = pd.read_csv('students.csv')
# Combine skills and interests into one feature
students_df['combined_features'] = students_df[' skills'] + ' ' + students_df[' interests']

# Vectorize the combined features using TF-IDF
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(students_df['combined_features'])

# Calculate cosine similarity between students
similarity_matrix = cosine_similarity(tfidf_matrix)

# Function to get recommended students
def recommend_students(student_id, top_n=5):
    student_idx = students_df[students_df['student_id'] == student_id].index[0]
    similarity_scores = list(enumerate(similarity_matrix[student_idx]))

    # Sort students based on similarity score
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    # Get the top N most similar students (excluding the student itself)
    similar_students = [students_df.iloc[i[0]][' name'] for i in similarity_scores[1:top_n+1]]

    return similar_students

# Example usage: Recommend students similar to student with ID 1
recommended_students = recommend_students(2)
print("Recommended students:", recommended_students)

"""Recommend Mentors"""

# Load the mentors dataset
mentors_df = pd.read_csv('mentors.csv')

# Vectorize the mentors' expertise and students' skills
mentors_df['combined_features'] = mentors_df[' expertise']
students_df['combined_features'] = students_df[' skills']

# Vectorize both using TF-IDF
mentor_tfidf_matrix = vectorizer.fit_transform(mentors_df['combined_features'])
student_tfidf_matrix = vectorizer.transform(students_df['combined_features'])

# Calculate similarity between students and mentors
mentor_similarity_matrix = cosine_similarity(student_tfidf_matrix, mentor_tfidf_matrix)

# Function to recommend mentors for a student
def recommend_mentors(student_id, top_n=3):
    student_idx = students_df[students_df['student_id'] == student_id].index[0]
    similarity_scores = list(enumerate(mentor_similarity_matrix[student_idx]))

    # Sort mentors based on similarity score
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    # Get the top N most similar mentors
    similar_mentors = [mentors_df.iloc[i[0]][' name'] for i in similarity_scores[:top_n]]

    return similar_mentors

# Example usage: Recommend mentors for student with ID 1
recommended_mentors = recommend_mentors(1)
print("Recommended mentors:", recommended_mentors)

"""Recommend hackathons"""

# Load the hackathons dataset
hackathons_df = pd.read_csv('hackathons.csv')

# Combine skills required for hackathons
hackathons_df['combined_features'] = hackathons_df['skills_required']

# Vectorize the hackathons' required skills and students' skills
hackathon_tfidf_matrix = vectorizer.fit_transform(hackathons_df['combined_features'])

# Calculate similarity between students and hackathons
hackathon_similarity_matrix = cosine_similarity(student_tfidf_matrix, hackathon_tfidf_matrix)

# Function to recommend hackathons for a student
def recommend_hackathons(student_id, top_n=3):
    student_idx = students_df[students_df['student_id'] == student_id].index[0]
    similarity_scores = list(enumerate(hackathon_similarity_matrix[student_idx]))

    # Sort hackathons based on similarity score
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)

    # Get the top N most similar hackathons
    similar_hackathons = [hackathons_df.iloc[i[0]]['name'] for i in similarity_scores[:top_n]]

    return similar_hackathons

# Example usage: Recommend hackathons for student with ID 1
recommended_hackathons = recommend_hackathons(1)
print("Recommended hackathons:", recommended_hackathons)

