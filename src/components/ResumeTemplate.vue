<template lang="html">
    <div class="resume-render-wrapper">
        <div class="resume-template">
            <table class="main">
                <tr>
                    <td class="w-20">
                        <img src="../assets/daiict-logo.jpg">
                    </td>

                    <td class="intro w-80">
                        <h1>{{resume.info.name}}</h1>
                        <p>
                            <b>Dhirubhai Ambani Institute of Information and Communication Technology</b>
                        </p>
                        <p>
                            <span class="w-60 inline-block">
                                <b>Email:</b> {{resume.info.email}}
                            </span>
                            <span class="w-40 text-right">
                                <b>DOB:</b> {{resume.info.dob}}
                            </span>
                        </p>
                        <p>
                            <b>Address:</b> {{resume.info.address}}
                        </p>
                    </td>

                </tr>

            </table>

            <table class="w-100 section" v-if="resume.degrees.length">
                <tr>
                    <td colspan="4" class="section-header">
                        <h3>EDUCATION</h3>
                    </td>
                </tr>
                <tr>
                    <th colspan="1">Degree</th>
                    <th colspan="1">University/Institute</th>
                    <th colspan="1">Year</th>
                    <th colspan="1">CPI/Aggregate</th>
                </tr>

                <tr v-for="(degree, index) in resume.degrees">
                    <td>
                        <b>{{degree.name}}</b>
                    </td>
                    <td>
                        {{degree.institute}}
                    </td>
                    <td>
                        {{degree.year}}
                    </td>
                    <td>
                        {{degree.score}}
                    </td>
                </tr>
            </table>

            <table class="w-100 section">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>SKILLS</h3>
                    </td>
                </tr>
                <tr v-if="resume.skill.expertise">
                    <td class="w-30">
                        <b>Expertise Area/Area(s) of
                            Interest</b>
                    </td>
                    <td class="w-70">
                        {{resume.skill.expertise}}
                    </td>
                </tr>
                <tr v-if="resume.skill.programming_languages">
                    <td class="w-30">
                        <b>Programming Language(s)</b>
                    </td>
                    <td class="w-70">
                        {{resume.skill.programming_languages}}
                    </td>
                </tr>
                <tr v-if="resume.skill.tools">
                    <td class="w-30">
                        <b>Tools and
                            Technologies</b>
                    </td>
                    <td class="w-70">
                        {{resume.skill.tools}}
                    </td>
                </tr>
                <tr v-if="resume.skill.technical_electives">
                    <td class="w-30">
                        <b>Technical Electives</b>
                    </td>
                    <td class="w-70">
                        {{resume.skill.technical_electives}}
                    </td>
                </tr>
            </table>
            <div class="page-break"></div>
            <table class="w-100 section" v-if="resume.internships.length">
                <tr>
                    <td colspan="3" class="section-header">
                        <h3>PROFESSIONAL EXPERIENCE/INTERNSHIPS</h3>
                    </td>
                </tr>

                <tr v-for="(internship, index) in resume.internships">
                    <td class="w-20" valign="top">
                        <p>
                            <b>{{internship.name}}</b>
                        </p>
                    </td>
                    <td class="w-60" valign="top">
                        <p>
                            {{internship.description}}
                            <p v-if="internship.guide">
                                <i>Guide: {{internship.guide}}</i>
                            </p>
                        </p>
                    </td>
                    <td class="w-20" valign="top">
                        <p>({{internship.start}} - {{internship.end}})</p>
                        <p v-show="internship.team_size">Team Size - {{internship.team_size}}</p>
                    </td>
                </tr>
            </table>
            <table class="w-100 section" v-if="resume.projects.length">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>PROJECTS</h3>
                    </td>
                </tr>

                <tr v-for="(project, index) in resume.projects">
                    <td class="w-80" valign="top">
                        <p>
                            <b>{{project.name}}</b>
                        </p>
                        <p>
                            {{project.description}}
                            <p v-if="project.guide">
                                <i>Guide: {{project.guide}}</i>
                            </p>
                        </p>
                    </td>
                    <td class="w-20" valign="top">
                        <p>({{project.start}} - {{project.end}})</p>
                        <p v-show="project.team_size">Team Size - {{project.team_size}}</p>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="resume.positions.length">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>POSITION OF RESPONSIBILITY</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                                <li v-for="(position, index) in resume.positions">
                                    {{position.name}}
                                </li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="resume.awards.length">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>AWARDS AND ACHIEVEMENTS</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                                <li v-for="(award, index) in resume.awards">
                                    {{award.name}}
                                </li>
                        </ul>
                    </td>
                </tr>
            </table>

            <table class="w-100 section" v-if="resume.hobbies.length">
                <tr>
                    <td colspan="2" class="section-header">
                        <h3>INTERESTS AND HOBBIES</h3>
                    </td>
                </tr>
                <tr>
                    <td valign="top">
                        <ul class="list">
                            <li v-for="(hobby, index) in resume.hobbies">
                                {{hobby.name}}
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    resume: {
      required: true,
      type: Object
    }
  }



}
</script>

<style lang="scss">@import "../scss/resume-template";</style>
