import $clamp from 'clamp-js';

const module = document.querySelectorAll('.aubskate-post-link-title');
for (let index = 0; index < module.length; index++) {
    $clamp(module[index], { clamp: 3 });
}
