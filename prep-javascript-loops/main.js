// create your loops here.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

for (let i = 0; i <= 18; i = i + 2) {
  console.log(i);
}

for (let i = 100; ; i--) {
  console.log('Time till explosion ' + i + '!');
  if (i <= 1) break;
}
