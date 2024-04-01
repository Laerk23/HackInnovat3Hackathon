from flask import Flask, jsonify
import json

app = Flask(__name__)

# Load the course data from our gathered JSON files
def load_course_data():
    courses_data = {}
    for college in ['CDS', 'CFA', 'COM', 'SAR', 'SHA', 'STH']:
        with open(f'course_data{college}.json', 'r') as f:
            courses_data[college] = json.load(f)
    return courses_data

courses_data = load_course_data()

@app.route('/')
def index():
    return 'Welcome to the BU Course Schedule Optimizer API!'

@app.route('/courses/<college>')
def get_courses(college):
    if college in courses_data:
        return jsonify(courses_data[college])
    else:
        return jsonify({'error': 'College not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
