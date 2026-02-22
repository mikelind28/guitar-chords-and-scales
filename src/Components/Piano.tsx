export default function Piano() {
    return (
        <>
            <p>Piano test...</p>
            <table className='border border-black'>
                <tr className='*:w-2 *:h-12'>
                    <td></td>
                    <td></td>
                    <td className='bg-black'></td>
                    <td className='bg-black'></td>
                    <td></td>
                    <td className='bg-black'></td>
                    <td className='bg-black'></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr className='*:w-2 *:h-12 *:nth-[3n]:border-r *:nth-[3n]:border-r-black'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </>
    )
}