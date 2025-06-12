# Instructions

This paper addresses some of the topic matter covered in research and activity this week. Be sure to include reference links below to the research and information you used to complete this assignment. Update this document where indicated [look for the brackets!]. Replace text inside the brackets with your own information.

## Topic: Terminal

Professional developers use Terminal daily. It's essential to understand some fundamental commands to use the application.

Update the information below to demonstrate your knowledge on this topic.

**1. Using Terminal, there are essential commands to know.**

List the correct Terminal commands to do the actions listed below. Replace **CMD** with the correct command sequence. You can keep or enhance the brief description.

**The last bullet provides an example**.

- `clear` : Clear the Screen
- `pwd` : Print the "Working Directory"
- `ls` : List files and folders
- `ls -a` : List files and folders, including invisible files
- `ls -lh` : List all files and folders, in human readable form
- `cd` : Change directory
- `cd /` : Change directory, go to root directory
- `cd ~` : Change directory and go to user home directory
- `cd ..` : Change directory, go up one folder level
- `cd ../..` : Change directory, go up two folder levels
- `cd ~/Desktop` : Change directory to my desktop!

**2. Using Terminal...**

**Folder Drop:** Try typing "cd" followed by a space, and then drag a folder into terminal and press return. Test this out and describe your results below.

This command changed the "Working Directory" of the Terminal session, replacing the old path with the new path of the folder I dragged into the Terminal window. Without the `cd` command dragging and dropping a file or folder into the Terminal window enters the full path of the file or folder into the command line.

## Topic: Version Control & Git

Version control, also known as revision control, records changes to a file or set of files over time so that you can recall specific versions later. In this class, we are learning Git. Update the information below where indicated.

**1. There are three types of version control.**

The three types of version control are Local, Centralized (CVCS), and Distributed (DVCS).

1.  A Local Version Control System is described as simply making a copy of an existing file or folder and renaming it with an appended version number added to the original file name. Additionally, the local copy of the file or folder can be moved to a different storage directory.

2.  A Centralized Version Control System allows multiple people to access and work on files or folders stored on a single server. However, only one file or folder can be checked out at any one time, and if the server goes down, so does the ability for workers to complete their tasks. If there is no backup, all project data may be lost forever. Collaboration is impossible because only one developer can check out a single file or folder at a time.

3.  A Distributed Version Control System allows multiple people to access and work on files or folders stored on one or more servers and locally on user devices. Since individual workers download a local copy of a file or folder, if the primary server goes down, workers can still work on their local copies. Their local copies can even be used as a backup to restore the files and folders on the Distributed Version Control System in the event of data loss or a server crash. Plus, workers can collaborate on one specific file or folder, unlike the other two version control systems, since files are not checked out but rather copied locally on each individual worker's device.

**2. Using Terminal, there are also essential Git commands to know.**

List the correct Git commands to do the actions listed below in Terminal. Replace CMD with the correct command and keep or enhance the brief description.

- `git clone` : Clone a repository
- `git config --global user.name "userName"` : Set-up a global user name
- `git config --global user.email "email@example.com"` : Set-up a global email address (to match my GitHub account email)
- `git status` : Shows the current state of your directory and staging area
- `git add .` (Catch-All) or `git add <fileName>` (Specific) : Add modified files to the next commit
- `git commit -m "message"` : Make a commit with a new message
- `git log` : Show my commit history
- `git help` : This command brings up Git's help screen in Terminal

**3. Connecting to GitHub using Terminal.**
HTTPS is the the correct way to connect to GitHub in this course. Describe how you connect to GitHub from Terminal using this protocol. What steps do you take?

1. To connect to GitHub via the Terminal application using the HTTPS protocol, you must first go to the root page of your repository on GitHub.com.

2. Click the green `Code` button, and under `Clone`, make sure HTTPS is selected. Then copy the HTTPS link.

3. Once you've copied the link, you need to open a new Terminal window and change the directory to a folder where you want to keep the local copy of your GitHub repository.

> - Note: Git will create a subfolder folder within the chosen location containing the local copy of your GitHub repository.

4. Next, type into the terminal `git clone "Link"`, replacing `"Link"` with the HTTPS URL you previously copied.

> - Note: If it is your first time connecting to GitHub, you may be asked to enter your admin password for your Mac computer and log in to your GitHub account by providing your username and password. You will also need to generate a `Personal Access Token (classic)` and enter that instead of your password for security reasons.

5. Git will then clone the entire repo into the specified local folder on your computer, where you can then make changes to your files and folders and work on your project.

**4. Using .gitignore and Why it's Important**
Most repositories contain a .gitignore file.

- What is the purpose of this file?
- What is the "**.DS_Store**" file and why would you want to ignore it?
- What other file or folder would you want to add to a .gitignore file and why?

1. The `.gitignore` file tells Git what files and folders you don't want to back up to your repository. Depending on your project, programming language, Integrated Development Environment (IDE), or even operating system, there may be files that are generated automatically that are unique to your computer. To save space and prevent file conflicts between different users and devices, excluding such files and folders from being backed up or committed to your repository, is important.

2. The `.DS_Store` file is a file generated by and unique to the macOS operating system. It is a hidden file that stores information about files and folders within a directory when viewed using the Finder file manager application that comes pre-installed on all Apple Macs and MacBooks. Outside of your computer, these `.DS_Store` files serve no purpose and should not be backed up to a repository. In addition, they can be a security risk and contain personally identifiable information or metadata that can be useful to hackers, which is why they should be ignored.

3. I know that you should add files and folders to a `.gitignore` file that are automatically generated by a programming language, Integrated Development Environment (IDE), game engines such as Unity or Unreal, a programming language compiler, or any other unnecessary files generated by your operating system. Additionally, it is important to add files that are used for security purposes or as login credentials, such as API Keys, API Tokens, Hash Keys, or any other security-related file or folder. The primary purpose of a GitHub repository is to store only the code and assets that are important for your project to function properly and that you want to share with other developers so they can contribute to your project. Anything else outside of that scope, especially if it's generated locally, or a security risk if disclosed, is unnecessary to include in your repo commits. If your repo is publicly available, disclosing credentials and important security files could have bad consequences and lead to a cybersecurity breach or data leak. That's why it's important to make sure you are ignoring the right files and keeping important credentials private.

<br>

# Reference Links

Replace the example references below with your own links and recommended resources. It is acceptable to provide multiple links for a single topic and to use material provided to you in this class. You are encouraged to link to your own independent research as well.

For this week's research, I already had some existing knowledge of Git and GitHub, so some of the answers I gave came from self-taught knowledge. That said, I found some additional resources that helped me refresh my memory and answer the questions in this assignment. In terms of Terminal & Git commands, I found a great cheat sheet chart on Google for Terminal commands provided by MakeUseOf.com. For the Git commands, I just used the Git Cheat Sheet PDF included in the course materials this week. Since version control was a newer topic to me, I used a combination of the information from the Version Control lesson on FSO and a blog article created by Eduonix.com to learn and explain the three types of version control systems. For the connecting to GitHub portion of this assignment, I decided to use first-party documentation straight from GitHub, and that documentation helped me get things set up correctly earlier this week. And finally, I expanded my knowledge about `.gitignore` and `.DS_Store` files by reading a few articles on LinuxHint.com, BuildThis.com, and Zellwk.com in addition to the information provided in the course materials on FSO. All of these resources were helpful as I conducted my research and learned about these new topics. I plan to utilize these resources in the future if I need to refresh or look something up as I work on my project this month.

**Terminal Commands**

- [https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

**Three Types of Version Control**

- [https://blog.eduonix.com/software-development/learn-three-types-version-control-systems/](https://blog.eduonix.com/software-development/learn-three-types-version-control-systems/)

**Git Commands**

- [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)

**Connecting to GitHub using Terminal**

- [https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

**Using .gitignore and Why it's Important**

- [https://linuxhint.com/gitignore-ds-store/](https://linuxhint.com/gitignore-ds-store/)
- [https://buildthis.com/ds_store-files-and-why-you-should-know-about-them/](https://buildthis.com/ds_store-files-and-why-you-should-know-about-them/)
- [https://zellwk.com/blog/gitignore/](https://zellwk.com/blog/gitignore/)
