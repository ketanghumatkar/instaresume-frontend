import User from './models/user'
import Project from './models/project'
import Internship from './models/internship'
import Degree from './models/degree'
import Skill from './models/skill'

export default {
  createUserFromGoogleData(data) {
    User.id = data.uid;
    User.name = data.displayName;
    User.email = data.email;
    User.photoUrl = data.photoURL;

    return User;
  },

  mergeResume(localResume, remoteResume) {
    Object.assign(localResume, remoteResume);

    // Merge Projects
    localResume.projects = localResume.projects.map((project, index) => {
      return Object.assign(Object.assign({}, Project), project);
    });

    // Merge Internships
    localResume.internships = localResume.internships.map((internship, index) => {
      return Object.assign(Object.assign({}, Internship), internship);
    });

    // Merge Degrees
    localResume.degrees = localResume.degrees.map((degree, index) => {
      return Object.assign(Object.assign({}, Degree), degree);
    });

    // Merge Skills
    localResume.skill = Object.assign(Object.assign({}, Skill), localResume.skill);
  },

  downloadFile(sUrl, fileName) {
    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
      alert('Your device does not support files downloading. Please try again in desktop browser.');
      return false;
    }

    //If in Chrome or Safari - download via virtual link click
    if (window.directDownloadFile.isChrome || window.directDownloadFile.isSafari) {
      //Creating new link node.
      var link = document.createElement('a');
      link.href = sUrl;

      if (link.download !== undefined) {

        if (fileName === undefined) {
          //Set HTML5 download attribute. This will prevent file from opening if supported.
          fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
        }

        link.download = fileName;
      }

      //Dispatching click event.
      if (document.createEvent) {
        var e = document.createEvent('MouseEvents');
        e.initEvent('click', true, true);
        link.dispatchEvent(e);
        return true;
      }
    }

    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
      sUrl += '?download';
    }

    window.open(sUrl, '_self');
    return true;
  }

}
