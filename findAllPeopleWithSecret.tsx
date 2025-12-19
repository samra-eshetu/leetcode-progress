function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  // Initialize Union-Find parent array where each person is their own parent initially
  const parent: number[] = Array.from({ length: n + 1 }, (_, index) => index);

  // Person 0 knows the secret initially, firstPerson also knows it
  parent[firstPerson] = 0;

  function findParent(index: number): number {
    if (parent[index] !== index) {
      // Path compression: directly connect to root parent
      parent[index] = findParent(parent[index]);
    }
    return parent[index];
  }

  // Group meetings by time
  const meetingsByTime = new Map<number, number[][]>();

  for (const meeting of meetings) {
    const [person1, person2, time] = meeting;

    if (!meetingsByTime.has(time)) {
      meetingsByTime.set(time, []);
    }
    meetingsByTime.get(time)!.push([person1, person2]);
  }

  // Process meetings in chronological order
  const sortedTimes = Array.from(meetingsByTime.keys()).sort((a, b) => a - b);

  for (const time of sortedTimes) {
    const currentMeetings = meetingsByTime.get(time)!;

    // First pass: Union people who meet at this time
    for (const [personA, personB] of currentMeetings) {
      const rootA = findParent(personA);
      const rootB = findParent(personB);

      // If either person knows the secret (parent is 0), share it
      if (parent[rootA] === 0 || parent[rootB] === 0) {
        parent[rootA] = 0;
        parent[rootB] = 0;
      }

      // Union the two groups
      parent[rootA] = parent[rootB];
    }

    // Second pass: Reset people who don't know the secret after this time
    for (const [personA, personB] of currentMeetings) {
      const rootA = findParent(personA);
      const rootB = findParent(personB);

      // If they know the secret, keep the connection
      if (parent[rootA] === 0 || parent[rootB] === 0) {
        parent[rootA] = 0;
        parent[rootB] = 0;
      } else {
        // Reset connections for people who don't know the secret
        parent[personA] = personA;
        parent[personB] = personB;
      }
    }
  }

  // Collect all people who know the secret
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    // A person knows the secret if their root parent is 0
    if (parent[findParent(i)] === 0) {
      result.push(i);
    }
  }

  return result;
}
