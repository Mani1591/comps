import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

export default function ModalPage(){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    const actionBar = <Button primary onClick={handleClose}>Agree</Button>;

    const ModalContent = (<Modal handleClose={handleClose} actionBar={actionBar}>
        <p>
            Please read and agree to the following terms and conditions:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur nibh in urna consequat fermentum. 
            Pellentesque ultrices lorem tellus, ac pharetra dui rhoncus vitae.
        </p>
    </Modal>);
    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {isOpen && ModalContent}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue varius ex et blandit. Donec suscipit orci sed eros dignissim, ac rutrum urna maximus. Aenean interdum felis non sem semper, eget rutrum odio aliquam. Cras dui dui, tempor id dolor ac, scelerisque efficitur tellus. Praesent vel ex lorem. Cras ut enim vel nibh viverra varius ac varius risus. Cras ultrices laoreet lorem, eu vulputate sem ornare non. Curabitur accumsan velit ac molestie facilisis. Curabitur pellentesque ex tempus auctor tristique. Nam ut ante velit. Etiam dapibus libero eu libero varius, vel vehicula magna volutpat. Cras sollicitudin ex tellus, non varius nisl vestibulum sed. Aenean eget massa eros.

                Cras dignissim elementum accumsan. Nunc ac rutrum nulla, sed hendrerit mi. Sed est risus, elementum et lobortis at, scelerisque sit amet orci. Phasellus consequat, sem eu hendrerit dignissim, lectus augue imperdiet justo, id maximus lacus nibh at nibh. Etiam scelerisque tellus vel lacus egestas interdum. Etiam hendrerit a justo ut condimentum. Nam id tincidunt dui, a porttitor lectus. Donec feugiat lectus a malesuada maximus. Vivamus at iaculis lectus, eget ornare odio.

                Etiam ac aliquam nulla, sed sodales dui. Nullam pellentesque et velit et tempor. Aenean vitae eros et risus rutrum auctor. Nam auctor eros sit amet porttitor ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Vestibulum vestibulum malesuada volutpat. Praesent cursus, mi ut ultricies convallis, erat dui vulputate nibh, at ullamcorper urna mauris nec dolor.

                Integer nulla justo, posuere id felis et, mollis gravida quam. Donec pulvinar finibus risus, ut consectetur felis mollis vel. Vestibulum viverra, felis eu maximus rutrum, dolor risus porta tortor, et pharetra felis ex in nunc. Suspendisse potenti. Morbi rutrum, enim ut porttitor facilisis, erat ipsum faucibus nulla, ac feugiat felis leo venenatis risus. Ut pharetra aliquam neque, eu tincidunt metus elementum nec. Suspendisse rhoncus, elit sit amet posuere interdum, tellus odio viverra tellus, auctor hendrerit lacus ex tempus felis. Aenean sagittis mi libero, sed ultricies eros pretium vel.
Integer nulla justo, posuere id felis et, mollis gravida quam. Donec pulvinar finibus risus, ut consectetur felis mollis vel. Vestibulum viverra, felis eu maximus rutrum, dolor risus porta tortor, et pharetra felis ex in nunc. Suspendisse potenti. Morbi rutrum, enim ut porttitor facilisis, erat ipsum faucibus nulla, ac feugiat felis leo venenatis risus. Ut pharetra aliquam neque, eu tincidunt metus elementum nec. Suspendisse rhoncus, elit sit amet posuere interdum, tellus odio viverra tellus, auctor hendrerit lacus ex tempus felis. Aenean sagittis mi libero, sed ultricies eros pretium vel.
Integer nulla justo, posuere id felis et, mollis gravida quam. Donec pulvinar finibus risus, ut consectetur felis mollis vel. Vestibulum viverra, felis eu maximus rutrum, dolor risus porta tortor, et pharetra felis ex in nunc. Suspendisse potenti. Morbi rutrum, enim ut porttitor facilisis, erat ipsum faucibus nulla, ac feugiat felis leo venenatis risus. Ut pharetra aliquam neque, eu tincidunt metus elementum nec. Suspendisse rhoncus, elit sit amet posuere interdum, tellus odio viverra tellus, auctor hendrerit lacus ex tempus felis. Aenean sagittis mi libero, sed ultricies eros pretium vel.
Integer nulla justo, posuere id felis et, mollis gravida quam. Donec pulvinar finibus risus, ut consectetur felis mollis vel. Vestibulum viverra, felis eu maximus rutrum, dolor risus porta tortor, et pharetra felis ex in nunc. Suspendisse potenti. Morbi rutrum, enim ut porttitor facilisis, erat ipsum faucibus nulla, ac feugiat felis leo venenatis risus. Ut pharetra aliquam neque, eu tincidunt metus elementum nec. Suspendisse rhoncus, elit sit amet posuere interdum, tellus odio viverra tellus, auctor hendrerit lacus ex tempus felis. Aenean sagittis mi libero, sed ultricies eros pretium vel.
Integer nulla justo, posuere id felis et, mollis gravida quam. Donec pulvinar finibus risus, ut consectetur felis mollis vel. Vestibulum viverra, felis eu maximus rutrum, dolor risus porta tortor, et pharetra felis ex in nunc. Suspendisse potenti. Morbi rutrum, enim ut porttitor facilisis, erat ipsum faucibus nulla, ac feugiat felis leo venenatis risus. Ut pharetra aliquam neque, eu tincidunt metus elementum nec. Suspendisse rhoncus, elit sit amet posuere interdum, tellus odio viverra tellus, auctor hendrerit lacus ex tempus felis. Aenean sagittis mi libero, sed ultricies eros pretium vel.

                Mauris suscipit bibendum risus, sed bibendum ligula vulputate nec. Nullam nec nunc vehicula, porttitor augue in, malesuada est. Sed tristique quis lectus nec molestie. Aliquam molestie efficitur lobortis. Suspendisse bibendum rhoncus mauris non blandit. Suspendisse mollis nunc vitae enim lacinia, a porttitor sem venenatis. Nam hendrerit rutrum sodales. Donec ornare lacus ac turpis gravida facilisis. Donec id feugiat nibh. Morbi a elit id felis semper varius eu nec tellus. Sed eros tortor, tempus et dolor et, mollis convallis massa. Donec at nibh in nulla semper maximus.
            </p>
        </div>
    );
}