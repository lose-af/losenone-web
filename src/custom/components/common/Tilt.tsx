import { createEffect, createSignal, onCleanup } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';

type Props = {
	rotateStrength?: number;
	scaleStrength?: number;
	children: any;
};

export const Tilt = (props: Props): JSX.Element => {
	let tiltRef = null as HTMLElement | null;

	const [isHovering, setIsHovering] = createSignal(false);
	const [rotateX, setRotateX] = createSignal(0);
	const [rotateY, setRotateY] = createSignal(0);

	const handleMouseMove = (event: MouseEvent) => {
		if (!tiltRef) return;

		const rect = tiltRef.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const deltaX = event.clientX - centerX;
		const deltaY = event.clientY - centerY;

		// number for division is for controlling strength of transforms
		setIsHovering(true);
		setRotateX(-deltaY * (props.rotateStrength ?? 0.04));
		setRotateY(deltaX * (props.rotateStrength ?? 0.04));
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
		setRotateX(0);
		setRotateY(0);
	};

	onCleanup(() => {
		createEffect(() => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave);
		});
	});

	return (
		<div
			style={{
				perspective: '1000px',
				'z-index': isHovering() ? '10' : '0',
			}}
		>
			<div
				class="transition-transform duration-700 ease-out"
				ref={(el) => {
					tiltRef = el;
				}}
				style={{
					'--rotateX': `${rotateX()}deg`,
					'--rotateY': `${rotateY()}deg`,
					'--scale': isHovering()
						? props.scaleStrength ?? '1.02'
						: '1.0',
					transform:
						'rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(var(--scale))',
				}}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				{props.children}
			</div>
		</div>
	);
};
