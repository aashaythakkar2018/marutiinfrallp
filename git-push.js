const { execSync } = require('child_process');

try {
  console.log('Adding files...');
  execSync('git add .', { stdio: 'inherit' });
  
  console.log('Committing changes...');
  try {
    execSync('git commit -m "Fix lint errors and optimize mobile UI"', { stdio: 'inherit' });
  } catch (e) {
    console.log('Nothing to commit or commit failed.');
  }
  
  console.log('Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });
  console.log('Push successful!');
} catch (error) {
  console.error('Failed to push:', error.message);
  process.exit(1);
}
