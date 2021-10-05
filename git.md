# Getting started with Git

**Version control** is a system that records changes to a file or set of files over time so that you can recall specific versions later. A graphic or web designer would want to keep every version of an image or layout. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, and see who last modified something that might be causing a problem or issue.

*Local Version Control* (LVC) entails one database on your hard disk that stores changes to files.

*Centralized Version Control* (CVC) is a single server that contains all the versioned files, and a number of clients that check out files from that central place. Programmers are allowed to see activities with certain files and give admin more control over revision privileges. *This has been the standard for version control.*

In *Distributed Version Control* (DVC), clients don’t just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history. Any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data.

Git creates a snapshot of a file and stores a reference to it. Each time a saved changed version of a project is made, this is called commit. 

#### Three states of Git
+ Committed – stored in a local database
+ Modified – file changed but not committed to the database	
+ Staged – flagged a file’s changed version to be committee in the next snapshot


