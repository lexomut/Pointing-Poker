import { ChangeEvent } from 'react';

function readAvatar(event: ChangeEvent<HTMLInputElement>): File {
    const target = event.target as HTMLInputElement;
    return (target.files as FileList)[0];
}
export default readAvatar;
