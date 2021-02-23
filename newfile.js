
// (TODO): This can be removed once we're sure everything is working as expected
console.log('Hello from the outside!!!');
console.log('this is the new file from main!!!');
console.log('this is the new file!!!!');

// (TODO): This can be removed once we're sure everything is working as expected
console.log('old test file name!!!!!###!');
// function mergeEmptyPacketWithLastRevision(
//   review, firstPacket: Packet, commitsIndex: Dict<GithubCommit>) {
//   if (_.isEmpty(review.revisions) || !firstPacket) return false;
//   const lastRevisionKey = _.maxBy(_.keys(review.revisions), revKey => _.parseInt(revKey.slice(1)));
//   const lastRevision = review.revisions[lastRevisionKey];
//   // Don't merge if last revision is already obsolete, even if there are no differences among the
//   // files, since that means some of the intermediate commits changed.
//   if (isRevisionObsolete(lastRevision, commitsIndex)) return false;

//   const lastRevisionFileShas = _(review.files).mapValues(file => {
//     const fileRev = file?.revisions?.[lastRevisionKey];
//     if (fileRev) {
//       const item: ShaDict = {};
//       if (fileRev.fileSha) item.head = fileRev.fileSha;
//       if (fileRev.baseFileSha) item.base = fileRev.baseFileSha;
//       if (fileRev.fileMode) item.headMode = fileRev.fileMode;
//       if (fileRev.baseFileMode) item.baseMode = fileRev.baseFileMode;
//       if (fileRev.type) item.type = fileRev.type;
//       return item;
//     }
//   }).mapKeys((fileShas, fileKey) => review.files[fileKey].path).value();
//   if (!_.isEqual(lastRevisionFileShas, firstPacket.fileShas)) return false;

//   // First packet would create an empty revision, so merge it with the last revision even if
//   // it has already been captured (since the diffs will be exactly the same).
//   _.assign(lastRevision, {
//     commitSha: firstPacket.headCommit.sha,
//     baseCommitSha: firstPacket.baseCommit.sha,
//     // Keep old commitTimestamp.
//     equivalentCommitShas: _(lastRevision.equivalentCommitShas || '')
//       .split(',').compact()
//       .concat(firstPacket.equivalentCommitShas || [])
//       .push(lastRevision.commitSha)
//       .uniq()
//       .join(','),
//     equivalentBaseCommitShas: _(lastRevision.equivalentBaseCommitShas || '')
//       .split(',').compact()
//       .concat(firstPacket.equivalentBaseCommitShas || [])
//       .push(lastRevision.baseCommitSha)
//       .uniq()
//       .join(',')
//   });
//   return true;
// }


    // if (previousPacket && _.isEqual(packet.fileShas, previousPacket.fileShas)) {
    //   // Changes in this commit didn't touch files in the PR, so collapse them to avoid an
    //   // empty revision.
    //   packet.equivalentCommitShas = previousPacket.equivalentCommitShas || [];
    //   packet.equivalentCommitShas.push(previousPacket.headCommit.sha);
    //   packet.equivalentBaseCommitShas = previousPacket.equivalentBaseCommitShas || [];
    //   packet.equivalentBaseCommitShas.push(previousPacket.baseCommit.sha);
    //   packet.lastMeaningfulCommit =
    //     previousPacket.lastMeaningfulCommit || previousPacket.headCommit;
    // }
