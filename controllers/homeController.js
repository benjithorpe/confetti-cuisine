var courses = [
  { title: 'Event Driven Cakes', cost: 50 },
  { title: 'Asynchronous Artichoke', cost: 25 },
  { title: 'Object Oriented Orange Juice', cost: 10 },
];

exports.showCourses = (req, res) => res.render('courses', { courses });

exports.showSignup = (req, res) => res.render('contact');

exports.showPostedSignUpForm = (req, res) => res.render('thanks');
