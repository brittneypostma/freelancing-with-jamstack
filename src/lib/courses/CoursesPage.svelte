<script>
    import Courses from '@lib/courses/Courses.svelte'
    import Course from '@lib/courses/Course.svelte'
</script>

<Courses>	
    <Course
    link="/courses/freelancing"
    mainTitle="The Freelancer's Guide"
    subTitle="to the Business"
    desc="Learn about all the non-technical aspects of freelancing and getting a business started."
    />
    <Course
        link="/courses/beginner"
        mainTitle="The Beginner's Guide"
        subTitle="to the Web"
        desc="Learn how the web works and the basics of web development with HTML, CSS, and Javascript."
    />
</Courses>